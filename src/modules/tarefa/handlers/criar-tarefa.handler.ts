import { capitalizarTexto } from "@/shared/utils/formatters/capitalizar-texto.formatter";
import { CriarTarefaDTO } from "../dto/criar-tarefa.dto";
import { RespostaTarefaDTO } from "../dto/resposta-tarefa.dto";
import { CriarTarefaUseCase } from "../use-cases/criar-tarefa.use-case";

export class CriarTarefaHandler {
  constructor(private readonly criarTarefaUseCase: CriarTarefaUseCase) {}

  async handle(dadosEntrada: CriarTarefaDTO): Promise<RespostaTarefaDTO> {
    try {
      const dadosFormatados: CriarTarefaDTO = {
        ...dadosEntrada,
        titulo: capitalizarTexto(dadosEntrada.titulo),
      };

      return await this.criarTarefaUseCase.execute(dadosFormatados);

    } catch (error: unknown) {
      console.error("[CriarTarefaHandler] Erro na orquestração:", error);
      return { sucesso: false, mensagem: "Erro na orquestração dos dados ao criar tarefa." };
    }
  }
}