// src/actions/pipeline/buscar-pipeline.action.ts
"use server";

import { NegociacaoPf } from "@/shared/types/domain/negociacoes/INegociacao-pf";
import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";
import { KanbanColumnProps } from "@/shared/types/ui/kanban-column.props";
import { mapearNegociacaoParaCard } from "@/shared/utils/formatters/negociacao.mapper";

async function buscarNegociacoesPfMock(): Promise<NegociacaoPf[]> {
  return [{
      id: "neg-pf-1",
      titulo: "Bruce Wayne",
      valor: 150000,
      fase: "CAPTURA", // <-- Usando a tipagem correta de PF
      usuarioResponsavelId: "user-2",
      clienteId: "cli-pj-1",
      dataCriacao: new Date(),
      dataAtualizacao: new Date(),
  }];
}

async function buscarNegociacoesPjMock(): Promise<NegociacaoPj[]> {
  return [{
      id: "neg-pj-1",
      titulo: "Stark Industries",
      valor: 850000,
      fase: "FECHADO", // <-- Usando a tipagem correta de PJ
    usuarioResponsavelId: "user-2",
      clienteId: "cli-pj-1",
      dataCriacao: new Date(),
      dataAtualizacao: new Date(),
  }];
}

export async function buscarColunasPipelineAction(): Promise<KanbanColumnProps[]> {
  // Simula o tempo de rede
  await new Promise(resolve => setTimeout(resolve, 800));

  // 1. Busca PF e PJ ao mesmo tempo (Concorrência para ficar mais rápido)
  const [negociacoesPf, negociacoesPj] = await Promise.all([
    buscarNegociacoesPfMock(),
    buscarNegociacoesPjMock()
  ]);

  // 2. Junta tudo em um único array
  const todasNegociacoes = [...negociacoesPf, ...negociacoesPj];

  // 3. O Mapper não se importa se é PF ou PJ, ele traduz os dois!
  const cardsFormatados = todasNegociacoes.map(negociacao => mapearNegociacaoParaCard(negociacao));

  // 4. Agrupa nas colunas
  const colunas: KanbanColumnProps[] = [
    {
      id: "col-prospeccao",
      titulo: "Prospecção",
      corDoCabecalho: "bg-slate-400",
      cards: cardsFormatados.filter(c => c.corDestaque === "azul"), 
    },
    {
      id: "col-proposta",
      titulo: "Proposta Enviada",
      corDoCabecalho: "bg-blue-500",
      cards: cardsFormatados.filter(c => c.corDestaque === "cinza"),
    },
    {
      id: "col-fechado",
      titulo: "Fechado Ganho",
      corDoCabecalho: "bg-emerald-500",
      cards: cardsFormatados.filter(c => c.corDestaque === "verde"),
    }
  ];

  return colunas;
}


