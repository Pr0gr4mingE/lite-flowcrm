"use client";

import { useModal } from "@/hooks/modals/use-modal.hook";
import { FormNovaTarefa } from "./forms/form-nova-tarefa";

export function ModalNovaTarefa() {
  const { fecharModal, negocioId } = useModal();

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-lg flex flex-col overflow-hidden">
        <div className="p-5 border-b bg-slate-50 flex justify-between items-center">
          <h2 className="text-lg font-bold">Nova Tarefa {negocioId && `(#${negocioId})`}</h2>
          <button onClick={fecharModal} className="text-slate-400 hover:text-slate-600 transition-colors">✕</button>
        </div>
        <FormNovaTarefa negocioId={negocioId} onCancel={fecharModal} onSuccess={fecharModal} />
      </div>
    </div>
  );
}