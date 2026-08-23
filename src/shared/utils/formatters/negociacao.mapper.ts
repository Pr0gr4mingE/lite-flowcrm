// src/shared/utils/formatters/negociacao.mapper.ts

// Ajuste os caminhos de importação conforme a sua estrutura real
import { NegociacaoPf} from "@/shared/types/domain/negociacoes/INegociacao-pf";
import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";
import { KanbanCardProps } from "@/shared/types/ui/kanban-card.props";

// Função isolada só para decidir a cor do card com base na fase da negociação
function definirCorPorFase(fase: string): "azul" | "verde" | "cinza" | "vermelho" {
  // Ajuste os nomes das fases para baterem exatamente com os seus Enums (FaseNegociacaoPf/Pj)
  const mapaDeCores: Record<string, "azul" | "verde" | "cinza" | "vermelho"> = {
    PROSPECCAO: "azul",
    PROPOSTA: "cinza",
    NEGOCIACAO: "vermelho",
    FECHADO_GANHO: "verde",
  };

  return mapaDeCores[fase] || "cinza";
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