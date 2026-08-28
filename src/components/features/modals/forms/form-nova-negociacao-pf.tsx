// src/components/features/modals/forms/form-detalhe-negocio-pf.tsx
"use client";

import { useFormDetalheNegocioPf } from "@/hooks/modals/forms/use-form-detalhe-negociacao-pf.hook";

interface FormDetalheNegocioPfProps {
  negocioId: string | null;
  onCancel: () => void;
  onSuccess: () => void;
}

export function FormDetalheNegocioPf({ negocioId, onCancel, onSuccess }: FormDetalheNegocioPfProps) {
  const {
    carregando, salvando,
    titulo, setTitulo,
    valor, setValor,
    status, setStatus,
    handleSalvar
  } = useFormDetalheNegocioPf(negocioId, onSuccess);

  if (carregando) {
    return <div className="p-8 text-center text-slate-500">Carregando dados...</div>;
  }

  return (
    <form onSubmit={handleSalvar} className="p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Título do Negócio *</label>
        <input required type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Valor (R$) *</label>
          <input required type="number" step="0.01" value={valor} onChange={(e) => setValor(Number(e.target.value))} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Status *</label>
          <select required value={status} onChange={(e) => setStatus(e.target.value)} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="NOVO_LEAD">Novo Lead</option>
            <option value="CONTATO_FEITO">Contato Feito</option>
            <option value="PROPOSTA_ENVIADA">Proposta Enviada</option>
            <option value="FECHADO_GANHO">Fechado Ganho</option>
            <option value="FECHADO_PERDIDO">Fechado Perdido</option>
          </select>
        </div>
      </div>

      <div className="pt-4 border-t flex justify-end gap-3 mt-6">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-sm border rounded-md text-slate-700 hover:bg-slate-50">Cancelar</button>
        <button type="submit" disabled={salvando} className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50">
          {salvando ? "Salvando..." : "Salvar Alterações"}
        </button>
      </div>
    </form>
  );
}