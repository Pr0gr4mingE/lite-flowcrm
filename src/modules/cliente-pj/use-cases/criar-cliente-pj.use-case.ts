import { CriarClientePjDTO } from "../dto/criar-cliente-pj.dto";
import { RespostaClientePjDTO } from "../dto/resposta-cliente-pj.dto";
import { IClientePjRepository } from "../repositories/ICliente-pj.repository";
import { ClientePj } from "@/shared/types/domain/clientes/ICliente-pj";

export class CriarClientePjUseCase {
  constructor(private readonly clientePjRepository: IClientePjRepository) {}

  async execute(dados: CriarClientePjDTO): Promise<RespostaClientePjDTO> {
    try {
      // Regra de Negócio: Impede CNPJ duplicado
      const cnpjJaExiste = await this.clientePjRepository.buscarPorCnpj(dados.cnpj);
      if (cnpjJaExiste) {
        return {
          sucesso: false,
          mensagem: "Já existe um cliente cadastrado com este CNPJ.",
        };
      }

      // Regra de Negócio: Impede E-mail duplicado
      const emailJaExiste = await this.clientePjRepository.buscarPorEmail(dados.email);
      if (emailJaExiste) {
        return {
          sucesso: false,
          mensagem: "Já existe um cliente cadastrado com este e-mail.",
        };
      }

      const clienteCriado = await this.clientePjRepository.salvar(dados);

      return {
        sucesso: true,
        mensagem: "Cliente Pessoa Jurídica criado com sucesso!",
        dados: clienteCriado as ClientePj,
      };

    } catch (error: unknown) {
      console.error("[CriarClientePjUseCase] Erro:", error);
      return {
        sucesso: false,
        mensagem: error instanceof Error ? error.message : "Erro interno ao criar cliente PJ.",
      };
    }
  }
}