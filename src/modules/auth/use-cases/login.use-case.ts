import { IUsuarioRepository } from "@/modules/usuario/repositories/IUsuario.repository";
import { CriarLoginDTO } from "../dto/criar-login.dto";
// Você pode reutilizar o DTO de resposta ou usar uma interface genérica de Action
import { RespostaUsuarioDTO } from "@/modules/usuario/dto/resposta-usuario.dto"; 
import { Usuario } from "@/shared/types/domain/agentes/IUsuario";

export class LoginUseCase {
  // 1. INJEÇÃO DE DEPENDÊNCIA
  constructor(private readonly usuarioRepository: IUsuarioRepository) {}

  async execute(dados: CriarLoginDTO): Promise<RespostaUsuarioDTO> {
    try {
      // 2. REGRA DE NEGÓCIO: Busca o usuário pelo e-mail
      const usuario = await this.usuarioRepository.buscarPorEmail(dados.email);

      // 3. REGRA DE NEGÓCIO: Valida se o usuário existe
      // Retornamos mensagem genérica para não dar dicas a invasores de quais e-mails existem no banco
      if (!usuario) {
        return {
          sucesso: false,
          mensagem: "Credenciais inválidas.",
        };
      }

      // 4. REGRA DE NEGÓCIO: Verifica se a senha bate
      // TODO: Trocar para bcrypt.compare() quando tivermos hash
      const senhaBate = dados.senha === usuario.senha;
      
      if (!senhaBate) {
        return {
          sucesso: false,
          mensagem: "Credenciais inválidas.",
        };
      }

      // 5. SEGURANÇA: Remove a senha do objeto antes de devolver
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { senha: _, ...usuarioLimpo } = usuario;

      // 6. RESPOSTA DE SUCESSO
      return {
        sucesso: true,
        mensagem: "Login realizado com sucesso!",
        // O TypeScript pode reclamar aqui se o seu RespostaUsuarioDTO exigir 
        // a senha no tipo Usuario. Se reclamar, usamos um (usuarioLimpo as Usuario)
        dados: usuarioLimpo as Usuario, 
      };

    } catch (error: unknown) {
      console.error("[LoginUseCase] Erro:", error);
      
      // 7. RESPOSTA DE ERRO
      return {
        sucesso: false,
        mensagem: error instanceof Error ? error.message : "Erro interno ao realizar o login.",
      };
    }
  }
}