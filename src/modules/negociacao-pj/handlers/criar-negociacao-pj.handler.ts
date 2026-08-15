import { capitalizarTexto } from "@/shared/utils/formatters/capitalizar-texto.formatter";
import { CriarNegociacaoPjDTO } from "../dto/criar-negociacao-pj.dto";
import { RespostaNegociacaoPjDTO } from "../dto/resposta-negociacao-pj.dto";
import { CriarNegociacaoPjUseCase } from "../use-cases/criar-negociacao-pj.use-case";

export class CriarNegociacaoPjHandler {
  constructor(private readonly criarNegociacaoPjUseCase: CriarNegociacaoPjUseCase) {}

  async handle(dadosEntrada: CriarNegociacaoPjDTO): Promise<RespostaNegociacaoPjDTO> {
    try {
      const dadosFormatados: CriarNegociacaoPjDTO = {
        ...dadosEntrada,
        titulo: capitalizarTexto(dadosEntrada.titulo),
      };

      return await this.criarNegociacaoPjUseCase.execute(dadosFormatados);

    } catch (error: unknown) {
      console.error("[CriarNegociacaoPjHandler] Erro na orquestração:", error);
      return { sucesso: false, mensagem: "Erro na orquestração dos dados ao criar negociação PJ." };
    }
  }
}