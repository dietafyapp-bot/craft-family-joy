export type WebVitalName = "LCP" | "CLS" | "INP";

export type WebVitalMetric = {
  name: WebVitalName;
  value: number;
  rating?: "good" | "needs-improvement" | "poor";
  delta?: number;
  id?: string;
  navigationType?: string;
  timestamp: number;
};

type Callback = (metric: WebVitalMetric) => void;

const now = () => (typeof performance !== "undefined" ? performance.now() : Date.now());

function rate(name: WebVitalName, value: number): WebVitalMetric["rating"] {
  // Thresholds based on Google's Web Vitals guidance.
  // LCP: good <= 2.5s, NI <= 4s, poor > 4s
  // CLS: good <= 0.1, NI <= 0.25, poor > 0.25
  // INP: good <= 200ms, NI <= 500ms, poor > 500ms
  if (name === "LCP") return value <= 2500 ? "good" : value <= 4000 ? "needs-improvement" : "poor";
  if (name === "CLS") return value <= 0.1 ? "good" : value <= 0.25 ? "needs-improvement" : "poor";
  return value <= 200 ? "good" : value <= 500 ? "needs-improvement" : "poor";
}

export function observeWebVitals(onMetric: Callback) {
  if (typeof window === "undefined" || typeof PerformanceObserver === "undefined") return () => {};

  let lcpValue = 0;
  let clsValue = 0;
  let inpValue = 0;

  const emit = (name: WebVitalName, value: number) => {
    const metric: WebVitalMetric = {
      name,
      value,
      rating: rate(name, value),
      timestamp: Date.now(),
    };
    onMetric(metric);
  };

  // LCP
  const lcpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as PerformanceEntry[]) {
      const value = (entry as any).startTime as number;
      if (value && value > lcpValue) {
        lcpValue = value;
        emit("LCP", Math.round(lcpValue));
      }
    }
  });

  // CLS
  const clsObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as PerformanceEntry[]) {
      const e = entry as any;
      if (!e.hadRecentInput && typeof e.value === "number") {
        clsValue += e.value;
        emit("CLS", Number(clsValue.toFixed(3)));
      }
    }
  });

  // INP (approx via Event Timing API). Uses max interaction latency.
  const inpObserver = new PerformanceObserver((list) => {
    for (const entry of list.getEntries() as PerformanceEntry[]) {
      const e: any = entry;
      // duration is end-to-end input delay+processing+presentation.
      if (typeof e.duration === "number") {
        inpValue = Math.max(inpValue, e.duration);
        emit("INP", Math.round(inpValue));
      }
    }
  });

  try {
    lcpObserver.observe({ type: "largest-contentful-paint", buffered: true } as any);
  } catch {
    // ignore
  }

  try {
    clsObserver.observe({ type: "layout-shift", buffered: true } as any);
  } catch {
    // ignore
  }

  try {
    inpObserver.observe({ type: "event", buffered: true, durationThreshold: 40 } as any);
  } catch {
    // ignore
  }

  // Stop observing after the page is hidden (standard practice)
  const onHidden = () => {
    try {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      inpObserver.disconnect();
    } catch {
      // ignore
    }
    document.removeEventListener("visibilitychange", onVisChange, true);
  };

  const onVisChange = () => {
    if (document.visibilityState === "hidden") onHidden();
  };

  document.addEventListener("visibilitychange", onVisChange, true);

  // Emit initial “snapshot” so panel isn't empty
  // (Values may be 0 until entries arrive.)
  emit("LCP", Math.round(lcpValue));
  emit("CLS", Number(clsValue.toFixed(3)));
  emit("INP", Math.round(inpValue));

  return () => {
    try {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      inpObserver.disconnect();
    } catch {
      // ignore
    }
    document.removeEventListener("visibilitychange", onVisChange, true);
  };
}
