import { CriarNegociacaoPfDTO } from "../dto/criar-negociacao-pf.dto";
import { RespostaNegociacaoPfDTO } from "../dto/resposta-negociacao-pf.dto";
import { INegociacaoPfRepository } from "../repositories/INegociacao-pf.repository";
import { NegociacaoPf } from "@/shared/types/domain/negociacoes/INegociacao-pf";

export class CriarNegociacaoPfUseCase {
  constructor(private readonly negociacaoPfRepository: INegociacaoPfRepository) {}

  async execute(dados: CriarNegociacaoPfDTO): Promise<RespostaNegociacaoPfDTO> {
    try {
      // Regra de Negócio: O valor da negociação não pode ser negativo
      if (dados.valor < 0) {
        return {
          sucesso: false,
          mensagem: "O valor da negociação não pode ser negativo.",
        };
      }

      const negociacaoCriada = await this.negociacaoPfRepository.salvar(dados);

      return {
        sucesso: true,
        mensagem: "Negociação PF criada com sucesso!",
        dados: negociacaoCriada as NegociacaoPf,
      };

    } catch (error: unknown) {
      console.error("[CriarNegociacaoPfUseCase] Erro:", error);
      return {
        sucesso: false,
        mensagem: error instanceof Error ? error.message : "Erro interno ao criar a negociação PF.",
      };
    }
  }
}