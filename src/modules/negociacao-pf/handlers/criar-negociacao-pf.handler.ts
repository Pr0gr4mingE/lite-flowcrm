import { capitalizarTexto } from "@/shared/utils/formatters/capitalizar-texto.formatter";
import { CriarNegociacaoPfDTO } from "../dto/criar-negociacao-pf.dto";
import { RespostaNegociacaoPfDTO } from "../dto/resposta-negociacao-pf.dto";
import { CriarNegociacaoPfUseCase } from "../use-cases/criar-negociacao-pf.use-case";

export class CriarNegociacaoPfHandler {
  constructor(private readonly criarNegociacaoPfUseCase: CriarNegociacaoPfUseCase) {}

  async handle(dadosEntrada: CriarNegociacaoPfDTO): Promise<RespostaNegociacaoPfDTO> {
    try {
      const dadosFormatados: CriarNegociacaoPfDTO = {
        ...dadosEntrada,
        titulo: capitalizarTexto(dadosEntrada.titulo),
      };

      return await this.criarNegociacaoPfUseCase.execute(dadosFormatados);

    } catch (error: unknown) {
      console.error("[CriarNegociacaoPfHandler] Erro na orquestração:", error);
      return { sucesso: false, mensagem: "Erro na orquestração dos dados ao criar negociação PF." };
    }
  }
}