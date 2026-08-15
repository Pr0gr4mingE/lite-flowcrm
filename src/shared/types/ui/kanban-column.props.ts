import { KanbanCardProps } from "./kanban-card.props";

export interface KanbanColumnProps {
  // O id da coluna agora é um string genérico. 
  // Na hora de montar a tela, você pode passar um StatusTarefa ou FaseNegociacao sem problemas.
  id: string; 
  titulo: string; 
  corDoCabecalho: string; 
  
  cards: KanbanCardProps[]; // A coluna recebe uma lista de cards já no formato certo
}