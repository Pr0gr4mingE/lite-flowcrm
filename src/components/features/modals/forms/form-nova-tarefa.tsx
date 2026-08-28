"use client";

import { useFormNovaTarefa } from "@/hooks/modals/forms/use-form-nova-tarefa.hook";
import { TipoTarefaB2b } from "@/shared/utils/types/tipo-tarefa-b2b.type";
import { TipoTarefaB2c } from "@/shared/utils/types/tipo-tarefa-b2c.type";
import { TipoTarefa } from "@/shared/utils/types/tipo-tarefa.type";
import { StatusTarefa } from "@/shared/utils/types/status-tarefa.type";

interface FormNovaTarefaProps {
  negocioId: string | null;
  onCancel: () => void;
  onSuccess: () => void;
}

export function FormNovaTarefa({ negocioId, onCancel, onSuccess }: FormNovaTarefaProps) {
  const {
    titulo, setTitulo, tipo, setTipo, status, setStatus,
    dataVencimento, setDataVencimento, descricao, setDescricao,
    salvando, handleSalvarTarefa
  } = useFormNovaTarefa(negocioId, onSuccess);

  return (
    <form onSubmit={handleSalvarTarefa} className="p-6 space-y-4">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Título *</label>
        <input required type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tipo *</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value as TipoTarefa | TipoTarefaB2b | TipoTarefaB2c )} className="w-full border rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <optgroup label="Ações Gerais">
              <option value="LIGACAO">Ligação</option>
              <option value="EMAIL">E-mail</option>
              <option value="LEMBRETE">Lembrete</option>
            </optgroup>
            <optgroup label="Foco B2B (Pessoa Jurídica)">
              <option value="REUNIAO_APRESENTACAO">Reunião de Apresentação</option>
              <option value="ENVIO_PROPOSTA">Envio de Proposta</option>
            </optgroup>
            <optgroup label="Foco B2C (Pessoa Física)">
              <option value="DISPARO_CAMPANHA">Disparo de Campanha</option>
              <option value="LEMBRETE_RECOMPRA">Lembrete de Recompra</option>
              <option value="ANALISE_DADOS">Análise de Dados</option>
            </optgroup>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Data *</label>
          <input required type="datetime-local" value={dataVencimento} onChange={(e) => setDataVencimento(e.target.value)} className="w-full border rounded-md p-2 text-sm" />
        </div>
      </div>

      <div>
         <label className="block text-sm font-medium text-slate-700 mb-1">Status inicial *</label>
          <select required value={status} onChange={(e) => setStatus(e.target.value as StatusTarefa)} className="w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none">
            <option value="PENDENTE">Pendente</option>
            <option value="EM_ANDAMENTO">Em Andamento</option>
            <option value="CONCLUIDA">Concluída</option>
          </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Descrição (Opcional)</label>
        <textarea rows={3} value={descricao} onChange={(e) => setDescricao(e.target.value)} className="w-full border border-slate-300 rounded-md p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none resize-y" />
      </div>

      <div className="pt-4 border-t flex justify-end gap-3">
        <button type="button" onClick={onCancel} className="px-4 py-2 text-sm border rounded-md">Cancelar</button>
        <button type="submit" disabled={salvando} className="px-4 py-2 text-sm bg-blue-600 text-white rounded-md">
          {salvando ? "Salvando..." : "Criar Tarefa"}
        </button>
      </div>
    </form>
  );
}