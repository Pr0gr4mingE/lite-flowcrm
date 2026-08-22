// src/components/features/pipeline/quadro-kanban.feature.tsx
"use client";

import { KanbanBoard } from "@/components/ui/kanban/kanban-board";
import { Modal } from "@/components/ui/modal";
import { KanbanColumnProps } from "@/shared/types/ui/kanban-column.props";
import { useKanban } from "@/hooks/kanban/use-kanban.hook";

const COLUNAS_MOCK: KanbanColumnProps[] = [ /* seus mocks aqui */ ];

export function QuadroKanbanFeature() {
  // O Hook faz o trabalho sujo!
  const { 
    colunas, 
    handleDragEnd, 
    modalAberto, 
    cardSelecionado, 
    fecharModal 
  } = useKanban(COLUNAS_MOCK);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pipeline de Vendas</h1>
        </div>
      </div>

      <KanbanBoard 
        colunas={colunas} 
        onDragEnd={handleDragEnd} 
      />

      <Modal isOpen={modalAberto} onClose={fecharModal} titulo="Detalhes">
        <p>Card ID: {cardSelecionado}</p>
      </Modal>
    </div>
  );
}