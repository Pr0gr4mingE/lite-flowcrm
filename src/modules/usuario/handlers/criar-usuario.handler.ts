import { capitalizarTexto } from "@/shared/utils/formatters/capitalizar-texto.formatter";
import { limparEmail } from "@/shared/utils/formatters/limpar-email.formatter";
import { apenasNumeros } from "@/shared/utils/formatters/apenas-numeros.formatter";
import { CriarUsuarioDTO } from "../dto/criar-usuario.dto";
import { RespostaUsuarioDTO } from "../dto/resposta-usuario.dto";
import { CriarUsuarioUseCase } from "../use-cases/criar-usuario.use-case";

export class CriarUsuarioHandler {
  // Recebe o Use Case via Injeção de Dependência
  constructor(private readonly criarUsuarioUseCase: CriarUsuarioUseCase) {}

  async handle(dadosEntrada: CriarUsuarioDTO): Promise<RespostaUsuarioDTO> {
    try {
      const dadosFormatados: CriarUsuarioDTO = {
        ...dadosEntrada,
        nome: capitalizarTexto(dadosEntrada.nome),
        email: limparEmail(dadosEntrada.email),
        cpf: apenasNumeros(dadosEntrada.cpf),
      };

      // Delegação real: passa a bola limpa e devolve o que o Use Case decidir
      return await this.criarUsuarioUseCase.execute(dadosFormatados);

    } catch (error: unknown) {
      console.error("[CriarUsuarioHandler] Erro na orquestração:", error);
      return { sucesso: false, mensagem: "Erro na orquestração dos dados ao criar usuário." };
    }
  }
}