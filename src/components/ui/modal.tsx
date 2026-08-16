import { ModalProps } from "@/shared/types/ui/modal.props";
import { useEscapeKey } from "@/shared/hooks/ui/use-escape-key.hook";
import { Button } from "./button";

export function Modal({ isOpen, onClose, titulo, children, footer }: ModalProps) {
  // A lógica foi delegada! O componente continua burro.
  useEscapeKey(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity">
      <div 
        className="w-full max-w-lg overflow-hidden rounded-xl bg-white shadow-2xl transition-all"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">{titulo}</h2>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            aria-label="Fechar modal"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        <div className="max-h-[70vh] overflow-y-auto px-6 py-4">
          {children}
        </div>

        {footer && (
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200 flex justify-end gap-3 rounded-b-xl">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}