import { CriarUsuarioDTO } from "../dto/criar-usuario.dto";
import { RespostaUsuarioDTO } from "../dto/resposta-usuario.dto";
import { IUsuarioRepository } from "../repositories/IUsuario.repository";
import { Usuario } from "@/shared/types/domain/agentes/IUsuario";

export class CriarUsuarioUseCase {
  // 1. INJEÇÃO DE DEPENDÊNCIA: Recebemos o contrato, não a implementação Drizzle direta.
  constructor(private readonly usuarioRepository: IUsuarioRepository) {}

  async execute(dados: CriarUsuarioDTO): Promise<RespostaUsuarioDTO> {
    try {
      // 2. REGRA DE NEGÓCIO: Valida duplicidade de CPF
      const cpfJaExiste = await this.usuarioRepository.buscarPorCpf(dados.cpf);
      if (cpfJaExiste) {
        return {
          sucesso: false,
          mensagem: "Já existe um usuário cadastrado com este CPF.",
        };
      }

      // 3. REGRA DE NEGÓCIO: Valida duplicidade de E-mail
      const emailJaExiste = await this.usuarioRepository.buscarPorEmail(dados.email);
      if (emailJaExiste) {
        return {
          sucesso: false,
          mensagem: "Já existe um usuário cadastrado com este e-mail.",
        };
      }

      // 4. PERSISTÊNCIA: Passou nas regras, manda o repositório salvar
      const usuarioCriado = await this.usuarioRepository.salvar(dados);

      // 5. RESPOSTA DE SUCESSO
      return {
        sucesso: true,
        mensagem: "Usuário criado com sucesso!",
        dados: usuarioCriado as Usuario, // Retorna a entidade completa gerada pelo banco
      };

    } catch (error: unknown) {
      console.error("[CriarUsuarioUseCase] Erro:", error);
      
      // 6. RESPOSTA DE ERRO (Falha no banco, etc)
      return {
        sucesso: false,
        mensagem: error instanceof Error ? error.message : "Erro interno ao criar o usuário.",
      };
    }
  }
}