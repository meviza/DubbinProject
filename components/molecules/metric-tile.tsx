import { Card, CardContent } from "@/components/ui/card";

type MetricTileProps = {
  label: string;
  value: string;
  helper: string;
};

export function MetricTile({ label, value, helper }: MetricTileProps) {
  return (
    <Card className="rounded-[24px] p-0">
      <CardContent className="space-y-3 p-5">
        <p className="text-xs uppercase tracking-[0.22em] text-[rgba(241,223,196,0.42)]">
          {label}
        </p>
        <div className="space-y-2">
          <span className="block font-[var(--font-heading)] text-4xl font-semibold text-[#fff1db]">
            {value}
          </span>
          <p className="text-sm leading-7 text-[rgba(241,223,196,0.52)]">{helper}</p>
        </div>
      </CardContent>
    </Card>
  );
}
