"use client";

import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { KanbanBoardProps } from "@/shared/types/ui/kanban-board.props";
import { CoresDestaque } from "@/shared/utils/ui/cores-destque.ui";

export function KanbanBoard({ colunas, carregando, onDragEnd }: KanbanBoardProps) {
  if (carregando) {
    return <div className="flex-1 flex items-center justify-center text-slate-500">Carregando quadro...</div>;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex-1 flex gap-6 overflow-x-auto pb-4 h-full">
        {colunas.map((coluna) => (
          <Droppable key={coluna.id} droppableId={coluna.id}>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`min-w-[300px] max-w-[300px] flex flex-col bg-slate-100/50 rounded-xl border ${
                  snapshot.isDraggingOver ? "border-blue-300 bg-blue-50/50" : "border-slate-200"
                } transition-colors overflow-hidden h-full`}
              >
                {/* CABEÇALHO DA COLUNA */}
                {coluna.corDoCabecalho && (
                  <div className={`h-1.5 w-full ${coluna.corDoCabecalho}`} />
                )}

                <div className="flex items-center justify-between mb-4 p-3 pb-0">
                  <h3 className="font-semibold text-slate-700 text-sm">{coluna.titulo}</h3>
                  <span className="bg-slate-200 text-slate-600 text-xs font-medium px-2 py-0.5 rounded-full">
                    {coluna.cards.length}
                  </span>
                </div>

                {/* ÁREA DOS CARDS ONDE A COR ENTRA */}
                <div className="flex-1 flex flex-col gap-3 p-3 pt-0 overflow-y-auto">
                  {coluna.cards.map((card, index) => (
                    <Draggable key={card.id} draggableId={card.id} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          onClick={() => card.aoClicar && card.aoClicar(card.id)}
                          
                          // 👇 OLHA A SUA UTIL DE CORES AQUI 👇
                          className={`bg-white rounded-lg border-y border-r border-l-4 flex flex-col cursor-pointer ${
                            card.corDestaque ? CoresDestaque[card.corDestaque] : "border-l-transparent"
                          } ${
                            snapshot.isDragging ? "shadow-lg border-y-blue-400 rotate-2" : "shadow-sm border-slate-200"
                          } hover:border-y-blue-300 transition-all p-4`}
                          
                          style={{
                            ...provided.draggableProps.style,
                            transform: snapshot.isDragging ? provided.draggableProps.style?.transform : "none"
                          }}
                        >
                          {/* CONTEÚDO VISUAL DO CARD */}
                          {card.subtitulo && (
                            <p className="text-xs text-blue-600 font-medium mb-1">{card.subtitulo}</p>
                          )}
                          <h4 className="text-sm font-semibold text-slate-900 mb-2">{card.titulo}</h4>
                          {card.valorFormatado && (
                            <div className="flex justify-between items-center text-xs text-slate-500">
                              <span>{card.valorFormatado}</span>
                            </div>
                          )}
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