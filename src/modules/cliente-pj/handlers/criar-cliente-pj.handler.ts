import { capitalizarTexto } from "@/shared/utils/formatters/capitalizar-texto.formatter";
import { limparEmail } from "@/shared/utils/formatters/limpar-email.formatter";
import { apenasNumeros } from "@/shared/utils/formatters/apenas-numeros.formatter";
import { CriarClientePjDTO } from "../dto/criar-cliente-pj.dto";
import { RespostaClientePjDTO } from "../dto/resposta-cliente-pj.dto";
import { CriarClientePjUseCase } from "../use-cases/criar-cliente-pj.use-case";

export class CriarClientePjHandler {
  constructor(private readonly criarClientePjUseCase: CriarClientePjUseCase) {}

  async handle(dadosEntrada: CriarClientePjDTO): Promise<RespostaClientePjDTO> {
    try {
      const dadosFormatados: CriarClientePjDTO = {
        ...dadosEntrada,
        razaoSocial: capitalizarTexto(dadosEntrada.razaoSocial),
        nomeFantasia: capitalizarTexto(dadosEntrada.nomeFantasia),
        email: limparEmail(dadosEntrada.email),
        cnpj: apenasNumeros(dadosEntrada.cnpj),
        telefone: apenasNumeros(dadosEntrada.telefone),
      };

      return await this.criarClientePjUseCase.execute(dadosFormatados);

    } catch (error: unknown) {
      console.error("[CriarClientePjHandler] Erro na orquestração:", error);
      return { sucesso: false, mensagem: "Erro na orquestração dos dados ao criar cliente PJ." };
    }
  }
}