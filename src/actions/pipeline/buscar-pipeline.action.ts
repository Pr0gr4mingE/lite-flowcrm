// src/actions/pipeline/buscar-pipeline.action.ts
"use server";

import { KanbanColumnProps } from "@/shared/types/ui/kanban-column.props";
import { mapearNegociacaoParaCard } from "@/shared/utils/formatters/negociacao.mapper";
import { MOCK_NEGOCIACOES_PF, MOCK_NEGOCIACOES_PJ } from "@/shared/data/mocks/negociacoes/negociacoes.mock";

export async function buscarColunasPipelineAction(tipo: "PF" | "PJ"): Promise<KanbanColumnProps[]> {
  await new Promise(resolve => setTimeout(resolve, 800));

  if (tipo === "PF") {
    const cardsFormatados = MOCK_NEGOCIACOES_PF.map(n => mapearNegociacaoParaCard(n));
    return [
      { id: "col-pf-captura", titulo: "Captura", corDoCabecalho: "bg-slate-400", cards: cardsFormatados.filter(c => c.corDestaque === "azul") },
      { id: "col-pf-engajamento", titulo: "Engajamento", corDoCabecalho: "bg-blue-500", cards: cardsFormatados.filter(c => c.corDestaque === "cinza") },
      { id: "col-pf-conversao", titulo: "Conversão", corDoCabecalho: "bg-emerald-500", cards: cardsFormatados.filter(c => c.corDestaque === "verde") }
    ];
  }

  // Se for PJ, monta as colunas exclusivas de PJ
  const cardsFormatados = MOCK_NEGOCIACOES_PJ.map(n => mapearNegociacaoParaCard(n));
  return [
    { id: "col-pj-lead", titulo: "Lead", corDoCabecalho: "bg-slate-400", cards: cardsFormatados.filter(c => c.corDestaque === "azul") },
    { id: "col-pj-proposta", titulo: "Proposta", corDoCabecalho: "bg-amber-500", cards: cardsFormatados.filter(c => c.corDestaque === "cinza") },
    { id: "col-pj-fechado", titulo: "Fechado", corDoCabecalho: "bg-emerald-500", cards: cardsFormatados.filter(c => c.corDestaque === "verde") }
  ];
}