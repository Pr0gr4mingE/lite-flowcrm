// src/hooks/features/use-kanban.hook.ts
import { useState, useCallback } from "react";
import { DropResult } from "@hello-pangea/dnd";
import { KanbanColumnProps } from "@/shared/types/ui/kanban-column.props";

export function useKanban(colunasIniciais: KanbanColumnProps[]) {
  const [colunas, setColunas] = useState<KanbanColumnProps[]>(colunasIniciais);
  const [modalAberto, setModalAberto] = useState(false);
  const [cardSelecionado, setCardSelecionado] = useState<string | null>(null);

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

    // Aqui será o ponto exato de chamar a Server Action no futuro!
    console.log(`Action: Mover ${draggableId} para coluna ${destination.droppableId}`);
  }, []);

  // Lógica de UI (Modal)
  const abrirModalCard = useCallback((id: string) => {
    setCardSelecionado(id);
    setModalAberto(true);
  }, []);

  const fecharModal = useCallback(() => {
    setModalAberto(false);
    setCardSelecionado(null); // Limpa a seleção ao fechar
  }, []);

  // Injetando o evento de clique nos cards antes de mandar pra UI
  const colunasComAcao = colunas.map(coluna => ({
    ...coluna,
    cards: coluna.cards.map(card => ({
      ...card,
      aoClicar: abrirModalCard
    }))
  }));

  return {
    colunas: colunasComAcao,
    setColunas,
    handleDragEnd,
    modalAberto,
    cardSelecionado,
    fecharModal
  };
}