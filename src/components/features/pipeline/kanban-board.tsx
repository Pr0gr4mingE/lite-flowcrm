"use client";

import { useEffect } from "react";
// Usamos um alias (as KanbanBoardUI) para importar o componente burro de mesmo nome
import { KanbanBoard as KanbanBoardUI } from "@/components/ui/kanban/kanban-board";
import { useKanban } from "@/hooks/kanban/use-kanban.hook";
import { usePipeline } from "@/hooks/kanban/use-pipeline.hook";

export function KanbanBoard() {
  const { tipoFunil, setTipoFunil, colunasDaPipeline, carregandoPipeline } = usePipeline();
  const { colunas, handleDragEnd, setColunas } = useKanban(colunasDaPipeline);

  useEffect(() => {
    if (setColunas) {
      setColunas(colunasDaPipeline);
    }
  }, [colunasDaPipeline, setColunas]);

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pipeline de Vendas</h1>
        </div>
        
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg w-max">
          <button 
            onClick={() => setTipoFunil("PF")} 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tipoFunil === "PF" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Pessoa Física (B2C)
          </button>
          <button 
            onClick={() => setTipoFunil("PJ")} 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${tipoFunil === "PJ" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
          >
            Pessoa Jurídica (B2B)
          </button>
        </div>
      </div>

      {/* Renderiza o componente da pasta UI */}
      <KanbanBoardUI 
        colunas={colunas} 
        onDragEnd={handleDragEnd} 
        carregando={carregandoPipeline} 
        tipoFunil={tipoFunil}  
      />
    </div>
  );
}