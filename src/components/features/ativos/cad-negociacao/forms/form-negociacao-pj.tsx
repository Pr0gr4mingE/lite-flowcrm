// src/features/ativos/cad-negociacao/forms/form-negociacao-pj.tsx
"use client";

import { useCadastrarNegociacaoPj } from "@/hooks/ativos/cad-negociacoes/use-cad-negociacao-pj.hook";

interface FormNegociacaoPjProps {
  clienteId?: string | null; 
}

export function FormNegociacaoPj({ clienteId }: FormNegociacaoPjProps) {

  const { cadastrar, isPending, erro } = useCadastrarNegociacaoPj();

  const handleSubmit = async (formData: FormData) => {
    const sucesso = await cadastrar(formData);
    
    if (sucesso) {
      console.log("Negociação PJ criada com Sucesso (Modo Visitante)!");
      // Futuro: toast de sucesso, limpar campos ou fechar modal
    }
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      {/* Travinha de Visitante LIGADA novamente */}
      <input type="hidden" name="isVisitorMode" value="true" />

      {/* Renderização Condicional da Empresa */}
      {clienteId ? (
        <div className="bg-blue-50 border border-blue-100 text-blue-700 px-4 py-3 rounded text-sm mb-4 flex items-center justify-between">
          <span>Vinculado à nova empresa recém-cadastrada.</span>
          <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          <input type="hidden" name="clienteId" value={clienteId} />
        </div>
      ) : (
        <div className="flex flex-col gap-1 mb-4">
          <label htmlFor="clienteId" className="text-sm font-medium text-gray-700">Selecione a Empresa *</label>
          <select id="clienteId" name="clienteId" required className="border p-2 rounded bg-white">
            <option value="">Selecione uma empresa da base...</option>
            <option value="ID_WAYNE">Wayne Enterprises</option>
            <option value="ID_STARK">Stark Industries</option>
            <option value="ID_OSCORP">Oscorp</option>
          </select>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="titulo" className="text-sm font-medium text-gray-700">Título da Negociação Corporativa *</label>
          <input type="text" id="titulo" name="titulo" required className="border p-2 rounded" placeholder="Ex: Contrato Anual de Software" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="valor" className="text-sm font-medium text-gray-700">Valor do Contrato (R$) *</label>
          <input type="number" id="valor" name="valor" required min="0" step="0.01" className="border p-2 rounded" placeholder="0.00" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="fase" className="text-sm font-medium text-gray-700">Fase Atual da Conta *</label>
          <select id="fase" name="fase" required className="border p-2 rounded bg-white">
            <option value="CONTATO_INICIAL">Contato Inicial</option>
            <option value="REUNIAO_AGENDADA">Reunião Agendada</option>
            <option value="POC_EM_ANDAMENTO">POC em Andamento</option>
            <option value="EM_APROVACAO">Em Aprovação (Jurídico)</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="dataPrevisaoFechamento" className="text-sm font-medium text-gray-700">Previsão de Fechamento</label>
          <input type="date" id="dataPrevisaoFechamento" name="dataPrevisaoFechamento" className="border p-2 rounded" />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="descricao" className="text-sm font-medium text-gray-700">Escopo do Projeto</label>
        <textarea id="descricao" name="descricao" rows={3} className="border p-2 rounded" placeholder="Definição do escopo e necessidades da empresa..."></textarea>
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
          {isPending ? "Criando Negociação..." : "Criar Negociação PJ"}
        </button>
      </div>
    </form>
  );
}