import { CriarTarefaDTO } from "../dto/criar-tarefa.dto";
import { RespostaTarefaDTO } from "../dto/resposta-tarefa.dto";
import { ITarefaRepository } from "../repositories/ITarefa.repository";
import { Tarefa } from "@/shared/types/domain/tarefas/ITarefa";

export class CriarTarefaUseCase {
  constructor(private readonly tarefaRepository: ITarefaRepository) {}

  async execute(dados: CriarTarefaDTO): Promise<RespostaTarefaDTO> {
    try {
      // Regra de Negócio Básica: Toda tarefa deve estar atrelada a um cliente ou negociação
      if (!dados.clienteId && !dados.negociacaoId) {
        return {
          sucesso: false,
          mensagem: "A tarefa deve estar vinculada a um cliente ou a uma negociação.",
        };
      }

      const tarefaCriada = await this.tarefaRepository.salvar(dados);

      return {
        sucesso: true,
        mensagem: "Tarefa criada com sucesso!",
        dados: tarefaCriada as Tarefa,
      };

    } catch (error: unknown) {
      console.error("[CriarTarefaUseCase] Erro:", error);
      return {
        sucesso: false,
        mensagem: error instanceof Error ? error.message : "Erro interno ao criar a tarefa.",
      };
    }
  }
}