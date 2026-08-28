"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { KanbanBoardProps } from "@/shared/types/ui/kanban-board.props";
import { CoresDestaque } from "@/shared/utils/ui/cores-destque.ui";
import { useModal } from "@/hooks/modals/use-modal.hook";

export function KanbanBoard({ colunas, carregando, onDragEnd, tipoFunil }: KanbanBoardProps) {
  const { abrirModal } = useModal();

  if (carregando) return <div>Carregando...</div>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex-1 flex gap-6 overflow-x-auto pb-4 h-full">
        {colunas.map((coluna) => (
          <Droppable key={coluna.id} droppableId={coluna.id}>
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef} className="min-w-[300px] max-w-[300px] flex flex-col h-full bg-slate-100/50 rounded-xl p-3">
                
                {/* Cabeçalho da Coluna (Ajuste conforme o seu layout original) */}
                <div className="mb-3 px-1">
                  <h3 className="font-semibold text-slate-700">{coluna.titulo}</h3>
                </div>

                <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
                  {coluna.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            onClick={() => abrirModal("detalhes", card.id, tipoFunil)} 
                            className={`bg-white rounded-lg border p-4 group cursor-pointer ${card.corDestaque ? CoresDestaque[card.corDestaque] : ""}`}
                          >
                          <h4 className="text-sm font-semibold">{card.titulo}</h4>
                          <div className="flex justify-between items-center mt-3 pt-3 border-t">
                            <span className="text-xs text-slate-600">{card.valorFormatado}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation(); 
                                abrirModal("tarefa", card.id);
                              }}
                              className="text-xs text-blue-600 font-semibold hover:bg-blue-50 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                              + Tarefa
                            </button>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}