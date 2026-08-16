import { forwardRef } from "react";
import {InputProps} from "@/shared/types/ui/input.props"

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        // h-11 no celular para facilitar o toque, text-base para evitar zoom no iOS
        className={`w-full h-11 md:h-10 px-3 text-base md:text-sm bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";