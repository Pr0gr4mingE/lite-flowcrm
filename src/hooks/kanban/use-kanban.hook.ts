// src/hooks/kanban/use-kanban.hook.ts (ou src/hooks/features/use-kanban.hook.ts dependendo da sua pasta)
import { useState, useCallback } from "react";
import { DropResult } from "@hello-pangea/dnd";
import { KanbanColumnProps } from "@/shared/types/ui/kanban-column.props";

export function useKanban(colunasIniciais: KanbanColumnProps[]) {
  const [colunas, setColunas] = useState<KanbanColumnProps[]>(colunasIniciais);

  // Lógica do Drag and Drop (reordenando os arrays localmente)
  const handleDragEnd = useCallback((result: DropResult) => {
    const { source, destination, draggableId } = result;
    
    // Ignora se soltou fora ou no mesmo lugar
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    setColunas((prevColunas) => {
      // Cópia profunda para respeitar a imutabilidade do React
      const novasColunas = prevColunas.map(coluna => ({
        ...coluna,
        cards: [...coluna.cards]
      }));

      const origemIndex = novasColunas.findIndex(c => c.id === source.droppableId);
      const destinoIndex = novasColunas.findIndex(c => c.id === destination.droppableId);

      // Arranca do original e injeta no destino
      const [cardMovido] = novasColunas[origemIndex].cards.splice(source.index, 1);
      novasColunas[destinoIndex].cards.splice(destination.index, 0, cardMovido);

      return novasColunas;
    });

    // Aqui será o ponto exato de chamar a Server Action no futuro para atualizar o banco!
    console.log(`Action: Mover ${draggableId} para coluna ${destination.droppableId}`);
  }, []);

  return {
    colunas,
    setColunas,
    handleDragEnd,
  };
}