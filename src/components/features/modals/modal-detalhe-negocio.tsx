// src/components/features/modals/modal-detalhe-negocio.tsx
"use client";

import { useModal } from "@/hooks/modals/use-modal.hook";
import { FormDetalheNegocioPf } from "./forms/form-nova-negociacao-pf";
import { FormDetalheNegocioPj } from "./forms/form-nova-negociacao-pj";

export function ModalDetalheNegocio() {
  const { fecharModal, negocioId, tipoFunil } = useModal();

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg flex flex-col overflow-hidden">
        
        <div className="p-5 border-b bg-slate-50 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-800">
            Editar Negócio {tipoFunil} {negocioId && `(#${negocioId})`}
          </h2>
          <button onClick={fecharModal} className="text-slate-400 hover:text-slate-600 transition-colors">✕</button>
        </div>
        
        {/* Renderiza o formulário correspondente ao tipo do funil */}
        {tipoFunil === "PF" && (
          <FormDetalheNegocioPf negocioId={negocioId} onCancel={fecharModal} onSuccess={fecharModal} />
        )}
        
        {tipoFunil === "PJ" && (
          <FormDetalheNegocioPj negocioId={negocioId} onCancel={fecharModal} onSuccess={fecharModal} />
        )}

        {/* Fallback de segurança caso a URL perca o parâmetro 'tipo' */}
        {!tipoFunil && (
          <div className="p-8 text-center text-red-500">
            Erro: Tipo de negócio (PF/PJ) não identificado na URL.
          </div>
        )}

      </div>
    </div>
  );
}