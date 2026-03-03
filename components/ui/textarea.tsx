import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-36 w-full rounded-3xl border border-white/[0.1] bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/[0.35] focus:border-cyan-300/40 focus:bg-white/[0.08]",
        className,
      )}
      {...props}
    />
  ),
);
Textarea.displayName = "Textarea";

export { Textarea };
