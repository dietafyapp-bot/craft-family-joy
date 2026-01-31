import { useMemo, useState } from "react";
import { useWebVitals } from "@/hooks/use-web-vitals";
import { Button } from "@/components/ui/button";

function formatValue(name: string, value?: number) {
  if (value == null) return "—";
  if (name === "CLS") return value.toFixed(3);
  if (name === "LCP") return `${Math.round(value)} ms`;
  if (name === "INP") return `${Math.round(value)} ms`;
  return String(value);
}

function badgeClass(rating?: string) {
  if (rating === "good") return "bg-accent/15 text-accent";
  if (rating === "needs-improvement") return "bg-secondary text-secondary-foreground";
  if (rating === "poor") return "bg-destructive/15 text-destructive";
  return "bg-muted text-muted-foreground";
}

export default function PerformancePanel() {
  const { metrics, isMobile } = useWebVitals({ logToConsole: true });
  const [open, setOpen] = useState(true);

  const payload = useMemo(() => {
    return {
      isMobile,
      LCP: metrics.LCP?.value,
      CLS: metrics.CLS?.value,
      INP: metrics.INP?.value,
      ts: Date.now(),
    };
  }, [isMobile, metrics.CLS?.value, metrics.INP?.value, metrics.LCP?.value]);

  if (!open) {
    return (
      <div className="fixed bottom-3 right-3 z-[9999]">
        <Button size="sm" variant="secondary" onClick={() => setOpen(true)}>
          Web Vitals
        </Button>
      </div>
    );
  }

  return (
    <section
      aria-label="Painel de performance"
      className="fixed bottom-3 right-3 z-[9999] w-[min(92vw,340px)] rounded-xl border border-border bg-background/90 backdrop-blur p-3 shadow-sm"
    >
      <header className="flex items-center justify-between gap-2 mb-2">
        <div className="text-sm font-medium text-foreground">Performance</div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-muted-foreground">{isMobile ? "mobile" : "desktop"}</span>
          <Button size="icon" variant="ghost" onClick={() => setOpen(false)} aria-label="Fechar painel">
            ✕
          </Button>
        </div>
      </header>

      <div className="grid grid-cols-3 gap-2">
        {(["LCP", "CLS", "INP"] as const).map((name) => {
          const metric = metrics[name];
          return (
            <div key={name} className="rounded-lg border border-border bg-card/50 p-2">
              <div className="flex items-center justify-between gap-2">
                <div className="text-[11px] text-muted-foreground">{name}</div>
                <span className={`text-[10px] px-1.5 py-0.5 rounded ${badgeClass(metric?.rating)}`}>
                  {metric?.rating ?? "—"}
                </span>
              </div>
              <div className="mt-1 text-sm font-semibold text-foreground">
                {formatValue(name, metric?.value)}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-2 flex items-center justify-between gap-2">
        <div className="text-[11px] text-muted-foreground">Abra com ?vitals=1</div>
        <Button
          size="sm"
          variant="secondary"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(JSON.stringify(payload));
            } catch {
              // ignore
            }
          }}
        >
          Copiar
        </Button>
      </div>
    </section>
  );
}
