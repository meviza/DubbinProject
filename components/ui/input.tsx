import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-[rgba(214,179,126,0.14)] bg-[rgba(241,222,192,0.03)] px-4 py-3 text-sm text-[#f8ecd9] outline-none transition placeholder:text-[rgba(241,223,196,0.3)] focus:border-[rgba(214,179,126,0.4)] focus:bg-[rgba(241,222,192,0.06)]",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export { Input };
