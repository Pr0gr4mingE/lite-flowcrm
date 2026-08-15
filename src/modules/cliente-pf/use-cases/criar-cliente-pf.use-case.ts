import { CriarClientePfDTO } from "../dto/criar-cliente-pf.dto";
import { RespostaClientePfDTO } from "../dto/resposta-cliente-pf.dto";
import { IClientePfRepository } from "../repositories/ICliente-pf.repository";
import { ClientePf } from "@/shared/types/domain/clientes/ICliente-pf";

export class CriarClientePfUseCase {
  constructor(private readonly clientePfRepository: IClientePfRepository) {}

  async execute(dados: CriarClientePfDTO): Promise<RespostaClientePfDTO> {
    try {
      // Regra de Negócio: Impede CPF duplicado
      const cpfJaExiste = await this.clientePfRepository.buscarPorCpf(dados.cpf);
      if (cpfJaExiste) {
        return {
          sucesso: false,
          mensagem: "Já existe um cliente cadastrado com este CPF.",
        };
      }

      // Regra de Negócio: Impede E-mail duplicado
      const emailJaExiste = await this.clientePfRepository.buscarPorEmail(dados.email);
      if (emailJaExiste) {
        return {
          sucesso: false,
          mensagem: "Já existe um cliente cadastrado com este e-mail.",
        };
      }

      const clienteCriado = await this.clientePfRepository.salvar(dados);

      return {
        sucesso: true,
        mensagem: "Cliente Pessoa Física criado com sucesso!",
        dados: clienteCriado as ClientePf,
      };

    } catch (error: unknown) {
      console.error("[CriarClientePfUseCase] Erro:", error);
      return {
        sucesso: false,
        mensagem: error instanceof Error ? error.message : "Erro interno ao criar cliente PF.",
      };
    }
  }
}