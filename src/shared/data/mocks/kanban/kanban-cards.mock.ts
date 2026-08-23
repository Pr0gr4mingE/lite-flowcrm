// src/shared/utils/mocks/kanban.mock.ts

import { KanbanColumnProps } from "@/shared/types/ui/kanban-column.props";

export const COLUNAS_MOCK: KanbanColumnProps[] = [
  {
    id: "col-prospeccao",
    titulo: "Prospecção",
    corDoCabecalho: "bg-slate-400",
    cards: [
      {
        id: "card-1",
        titulo: "Wayne Enterprises",
        subtitulo: "Contato inicial - Bruce",
        valorFormatado: "R$ 150.000,00",
        corDestaque: "azul",
      },
      {
        id: "card-2",
        titulo: "Daily Planet",
        subtitulo: "Falar com Clark",
        valorFormatado: "R$ 12.500,00",
        corDestaque: "cinza",
      }
    ]
  },
  {
    id: "col-proposta",
    titulo: "Proposta Enviada",
    corDoCabecalho: "bg-blue-500",
    cards: [
      {
        id: "card-3",
        titulo: "Stark Industries",
        subtitulo: "Aguardando Tony assinar",
        valorFormatado: "R$ 850.000,00",
        corDestaque: "verde",
      }
    ]
  },
  {
    id: "col-negociacao",
    titulo: "Em Negociação",
    corDoCabecalho: "bg-amber-500",
    cards: [
      {
        id: "card-4",
        titulo: "Oscorp",
        subtitulo: "Revisão de valores",
        valorFormatado: "R$ 300.000,00",
        corDestaque: "vermelho",
      },
      {
        id: "card-5",
        titulo: "LexCorp",
        subtitulo: "Análise de compliance",
        valorFormatado: "R$ 2.500.000,00",
        corDestaque: "cinza",
      }
    ]
  },
  {
    id: "col-fechado",
    titulo: "Fechado Ganho",
    corDoCabecalho: "bg-emerald-500",
    cards: []
  }
];