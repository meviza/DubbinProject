import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-white/[0.1] bg-white/[0.06] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/[0.35] focus:border-cyan-300/40 focus:bg-white/[0.08]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
