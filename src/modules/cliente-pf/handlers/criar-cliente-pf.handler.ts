import { capitalizarTexto } from "@/shared/utils/formatters/capitalizar-texto.formatter";
import { limparEmail } from "@/shared/utils/formatters/limpar-email.formatter";
import { apenasNumeros } from "@/shared/utils/formatters/apenas-numeros.formatter";
import { CriarClientePfDTO } from "../dto/criar-cliente-pf.dto";
import { RespostaClientePfDTO } from "../dto/resposta-cliente-pf.dto";
import { CriarClientePfUseCase } from "../use-cases/criar-cliente-pf.use-case";

export class CriarClientePfHandler {
  constructor(private readonly criarClientePfUseCase: CriarClientePfUseCase) {}

  async handle(dadosEntrada: CriarClientePfDTO): Promise<RespostaClientePfDTO> {
    try {
      const dadosFormatados: CriarClientePfDTO = {
        ...dadosEntrada,
        nome: capitalizarTexto(dadosEntrada.nome),
        email: limparEmail(dadosEntrada.email),
        cpf: apenasNumeros(dadosEntrada.cpf),
        telefone: apenasNumeros(dadosEntrada.telefone),
      };

      return await this.criarClientePfUseCase.execute(dadosFormatados);

    } catch (error: unknown) {
      console.error("[CriarClientePfHandler] Erro na orquestração:", error);
      return { sucesso: false, mensagem: "Erro na orquestração dos dados ao criar cliente PF." };
    }
  }
}