import { useEffect, useMemo, useState } from "react";
import { observeWebVitals, type WebVitalMetric } from "@/lib/webVitals";

export type WebVitalsState = {
  LCP?: WebVitalMetric;
  CLS?: WebVitalMetric;
  INP?: WebVitalMetric;
};

export function useWebVitals(options?: { logToConsole?: boolean }) {
  const logToConsole = options?.logToConsole ?? true;
  const [metrics, setMetrics] = useState<WebVitalsState>({});

  const isMobile = useMemo(() => {
    if (typeof navigator === "undefined") return false;
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, []);

  useEffect(() => {
    const stop = observeWebVitals((metric) => {
      setMetrics((prev) => ({ ...prev, [metric.name]: metric }));
      if (logToConsole) {
        const prefix = isMobile ? "[WebVitals][mobile]" : "[WebVitals]";
        // Keep log format simple for easy filtering.
        // eslint-disable-next-line no-console
        console.log(prefix, metric.name, metric.value, metric.rating);
      }
    });

    return () => stop();
  }, [isMobile, logToConsole]);

  return { metrics, isMobile };
}
