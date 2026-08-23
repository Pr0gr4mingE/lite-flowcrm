// src/shared/utils/formatters/negociacao.mapper.ts

// Ajuste os caminhos de importação conforme a sua estrutura real
import { NegociacaoPf} from "@/shared/types/domain/negociacoes/INegociacao-pf";
import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";
import { KanbanCardProps } from "@/shared/types/ui/kanban-card.props";

type FaseUnificada = NegociacaoPf["fase"] | NegociacaoPj["fase"];

function definirCorPorFase(fase: FaseUnificada): "azul" | "verde" | "cinza" | "vermelho" {
  // Fases Iniciais (Azul)
  if (["CAPTURA", "LEAD"].includes(fase)) return "azul";
  
  // Fases Intermediárias (Cinza)
  if (["ENGAJAMENTO", "CONTATO", "PROPOSTA"].includes(fase)) return "cinza";
  
  // Fases de Sucesso (Verde)
  if (["CONVERSAO", "FIDELIZACAO", "FECHADO"].includes(fase)) return "verde";
  
  // Fases de Perda (Vermelho)
  if (["DESISTENCIA", "INDEFERIDO"].includes(fase)) return "vermelho";

  return "cinza";
}

// O Tradutor principal
export function mapearNegociacaoParaCard(
  negociacao: NegociacaoPf | NegociacaoPj,
  aoClicarNoCard?: (id: string) => void
): KanbanCardProps {
  
  return {
    id: negociacao.id,
    titulo: negociacao.titulo,
    subtitulo: negociacao.descricao || "Sem descrição",
    
    // O backend devolve o valor como número (ex: 150000.5), o mapper formata pra UI (ex: R$ 150.000,50)
    valorFormatado: new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(negociacao.valor),
    
    corDestaque: definirCorPorFase(negociacao.fase),
    
    // Repassa a ação de clique se ela for injetada
    aoClicar: aoClicarNoCard,
  };
}