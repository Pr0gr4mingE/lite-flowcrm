// src/features/ativos/cad-negociacao/forms/form-negociacao-pf.tsx
"use client";

import { useCadastrarNegociacaoPf } from "@/hooks/ativos/cad-negociacoes/use-cad-negociacao-pf.hook";

interface FormNegociacaoPfProps {
  clienteId?: string | null; 
}

export function FormNegociacaoPf({ clienteId }: FormNegociacaoPfProps) {
  const { cadastrar, isPending, erro } = useCadastrarNegociacaoPf();

  const handleSubmit = async (formData: FormData) => {
    const sucesso = await cadastrar(formData);
    
    if (sucesso) {
      console.log("Negociação PF criada com Sucesso (Modo Visitante)!");
      // Futuro: toast de sucesso, limpar campos ou fechar modal
    }
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      {/* Travinha de Visitante LIGADA novamente */}
      <input type="hidden" name="isVisitorMode" value="true" />

      {/* Renderização Condicional do Cliente */}
      {clienteId ? (
        <div className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-3 rounded text-sm mb-4 flex items-center justify-between">
          <span>Vinculado ao novo cliente recém-cadastrado.</span>
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <input type="hidden" name="clienteId" value={clienteId} />
        </div>
      ) : (
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="clienteId" className="text-sm font-medium text-gray-700">Selecione o Cliente *</label>
          <select id="clienteId" name="clienteId" required className="border p-2 rounded bg-white">
            <option value="">Selecione um cliente da base...</option>
            <option value="ID_DO_BRUCE">Bruce Wayne</option>
            <option value="ID_DO_CLARK">Clark Kent</option>
            <option value="ID_DA_DIANA">Diana Prince</option>
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="titulo" className="text-sm font-medium text-gray-700">Título da Negociação *</label>
          <input type="text" id="titulo" name="titulo" required className="border p-2 rounded" placeholder="Ex: Mentoria VIP" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="valor" className="text-sm font-medium text-gray-700">Valor Estimado (R$) *</label>
          <input type="number" id="valor" name="valor" required min="0" step="0.01" className="border p-2 rounded" placeholder="0.00" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="fase" className="text-sm font-medium text-gray-700">Fase Atual *</label>
          <select id="fase" name="fase" required className="border p-2 rounded bg-white">
            <option value="PROSPECCAO">Prospecção</option>
            <option value="QUALIFICACAO">Qualificação</option>
            <option value="PROPOSTA">Proposta Apresentada</option>
            <option value="NEGOCIACAO">Em Negociação</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dataPrevisaoFechamento" className="text-sm font-medium text-gray-700">Previsão de Fechamento</label>
          <input type="date" id="dataPrevisaoFechamento" name="dataPrevisaoFechamento" className="border p-2 rounded" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="descricao" className="text-sm font-medium text-gray-700">Descrição</label>
        <textarea id="descricao" name="descricao" rows={3} className="border p-2 rounded" placeholder="Detalhes adicionais da negociação..."></textarea>
      </div>

      {erro && (
        <div className="p-3 bg-red-50 text-red-600 rounded text-sm border border-red-200">
          {erro}
        </div>
      )}

      <div className="pt-4 flex justify-end">
        <button 
          type="submit" 
          disabled={isPending}
          className="bg-green-600 text-white px-6 py-2 rounded font-medium hover:bg-green-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Criando Negociação..." : "Criar Negociação PF"}
        </button>
      </div>
    </form>
  );
}