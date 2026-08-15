import { CriarTarefaDTO } from "../dto/criar-tarefa.dto";
import { Tarefa } from "@/shared/types/domain/tarefas/ITarefa";
import { StatusTarefa } from "@/shared/utils/types/status-tarefa.type";
import { TipoTarefa } from "@/shared/utils/types/tipo-tarefa.type";
import { TipoTarefaB2b } from "@/shared/utils/types/tipo-tarefa-b2b.type";
import { TipoTarefaB2c } from "@/shared/utils/types/tipo-tarefa-b2c.type";

export interface ITarefaRepository {
  salvar(dados: CriarTarefaDTO): Promise<Tarefa>;
  
  // Buscas Únicas
  buscarPorId(id: string): Promise<Tarefa | null>;
  
  // Buscas em Lista
  buscarPorStatus(status: StatusTarefa): Promise<Tarefa[]>;
  buscarPorTipo(tipo: TipoTarefa | TipoTarefaB2b | TipoTarefaB2c): Promise<Tarefa[]>;
  buscarPorClienteId(clienteId: string): Promise<Tarefa[]>;
  buscarPorNegociacaoId(negociacaoId: string): Promise<Tarefa[]>;
  buscarPorDataVencimento(dataInicial: Date, dataFinal: Date): Promise<Tarefa[]>;
}