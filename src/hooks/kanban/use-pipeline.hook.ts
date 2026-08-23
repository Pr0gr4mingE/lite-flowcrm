// src/hooks/kanban/use-pipeline.hook.ts
import { useState, useEffect } from "react";
import { KanbanColumnProps } from "@/shared/types/ui/kanban-column.props";
import { buscarColunasPipelineAction } from "@/actions/pipeline/buscar-pipeline.action";

export type TipoFunil = "PF" | "PJ";

export function usePipeline() {
  const [tipoFunil, setTipoFunil] = useState<TipoFunil>("PF"); // Começa na PF
  const [colunasDaPipeline, setColunasDaPipeline] = useState<KanbanColumnProps[]>([]);
  const [carregandoPipeline, setCarregandoPipeline] = useState(true);

  useEffect(() => {
    async function carregarDados() {
      setCarregandoPipeline(true);
      try {
        // Busca os dados lá da Action passando a chavinha atual
        const dados = await buscarColunasPipelineAction(tipoFunil);
        setColunasDaPipeline(dados);
      } catch (error) {
        console.error("Erro ao carregar a pipeline:", error);
      } finally {
        setCarregandoPipeline(false);
      }
    }

    carregarDados();
  }, [tipoFunil]);

  return {
    tipoFunil,
    setTipoFunil,
    colunasDaPipeline,
    carregandoPipeline,
  };
}