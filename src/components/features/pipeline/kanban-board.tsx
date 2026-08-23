// src/components/features/pipeline/quadro-kanban.feature.tsx
"use client";

import { useEffect } from "react";
import { KanbanBoard } from "@/components/ui/kanban/kanban-board";
import { Modal } from "@/components/ui/modal";
import { useKanban } from "@/hooks/kanban/use-kanban.hook";
import { usePipeline } from "@/hooks/kanban/use-pipeline.hook";

export function QuadroKanbanFeature() {
  // 1. Hook de Negócio: Busca os dados e controla se estamos vendo PF ou PJ
  const { 
    tipoFunil, 
    setTipoFunil, 
    colunasDaPipeline, 
    carregandoPipeline 
  } = usePipeline();

  // 2. Hook de UI: Controla o arrastar, soltar e o Modal
  const { 
    colunas, 
    handleDragEnd, 
    modalAberto, 
    cardSelecionado, 
    fecharModal,
    // NOTA: Adicione a exportação do setColunas lá no seu useKanban 
    // para podermos atualizar os cards quando a pipeline terminar de carregar!
    setColunas 
  } = useKanban(colunasDaPipeline);

  // Sincroniza os dados do backend (Pipeline) com a tela (Kanban)
  useEffect(() => {
    if (setColunas) {
      setColunas(colunasDaPipeline);
    }
  }, [colunasDaPipeline, setColunas]);

  return (
    <div className="h-full flex flex-col">
      {/* Cabeçalho com Título e a Chavinha (Toggle) */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Pipeline de Vendas</h1>
        </div>

        {/* Chavinha para alternar B2C (PF) e B2B (PJ) */}
        <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-lg w-max">
          <button
            onClick={() => setTipoFunil("PF")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tipoFunil === "PF"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Pessoa Física (B2C)
          </button>
          <button
            onClick={() => setTipoFunil("PJ")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              tipoFunil === "PJ"
                ? "bg-white text-slate-900 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Pessoa Jurídica (B2B)
          </button>
        </div>
      </div>

      {/* O Quadro Kanban consumindo as propriedades */}
      <KanbanBoard 
        colunas={colunas} 
        onDragEnd={handleDragEnd} 
        carregando={carregandoPipeline}
      />

      {/* O Modal continua perfeitamente intacto */}
      <Modal isOpen={modalAberto} onClose={fecharModal} titulo="Detalhes">
        <p>Card ID: {cardSelecionado}</p>
      </Modal>
    </div>
  );
}