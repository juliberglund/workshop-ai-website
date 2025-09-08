import * as React from "react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  label: string;
  value: string;
}
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full rounded-lg border border-gray-300 bg-white px-4 py-2",
          "text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }
);
Select.displayName = "Select";
export { Select };
