import { Badge } from "@/components/ui/badge";

type SectionLabelProps = {
  children: string;
  className?: string;
};

export function SectionLabel({ children, className }: SectionLabelProps) {
  return <Badge className={className}>{children}</Badge>;
}
