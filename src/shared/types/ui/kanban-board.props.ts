import { KanbanColumnProps } from "./kanban-column.props";
// Removi o import vazio do domain. O ideal é que componentes puramente visuais 
// (como o Board) sejam "burros" e não conheçam as regras de negócio.

export interface KanbanBoardProps {
  colunas: KanbanColumnProps[];
  carregando?: boolean;
  
  // 👉 A MÁGICA DO KANBAN AQUI: 
  // O Board não salva no banco. Ele só avisa a página que o usuário arrastou um card.
  // Tipagem do cardId simplificada para string, acompanhando o padrão das nossas entidades.
  onMoverCard?: (cardId: string, colunaOrigemId: string, colunaDestinoId: string) => void;
}