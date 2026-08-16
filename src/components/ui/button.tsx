import { forwardRef } from "react";
import { ButtonProps } from "@/shared/types/ui/button.props";


export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "default", children, ...props }, ref) => {
    
    // 1. Estilos Base (O que todo botão tem: flex, bordas, transições, focus)
    // Tirei daqui o h-11 e px-4, pois agora isso depende do tamanho (size).
    const baseStyles = "w-full md:w-auto inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    // 2. Variantes de Cor
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
      outline: "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 focus:ring-blue-500",
      ghost: "text-gray-700 hover:bg-gray-100 focus:ring-gray-500",
    };

    // 3. Variantes de Tamanho
    const sizes = {
      default: "h-11 md:h-10 px-4 min-w-[120px] text-base md:text-sm", // O comportamento que você já tinha
      sm: "h-9 px-3 text-xs min-w-0", // Perfeito para ações secundárias, como "Salvar Nota" no Modal
      lg: "h-12 md:h-14 px-8 text-lg", // Excelente para botões gigantes de Landing Page
      icon: "h-10 w-10 p-2", // Ideal se um dia precisar de um botão só com ícone (ex: um botão de X para fechar)
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";