import { CriarNegociacaoPjDTO } from "../dto/criar-negociacao-pj.dto";
import { RespostaNegociacaoPjDTO } from "../dto/resposta-negociacao-pj.dto";
import { INegociacaoPjRepository } from "../repositories/INegociacao-pj.repository";
import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";

export class CriarNegociacaoPjUseCase {
  constructor(private readonly negociacaoPjRepository: INegociacaoPjRepository) {}

  async execute(dados: CriarNegociacaoPjDTO): Promise<RespostaNegociacaoPjDTO> {
    try {
      // Regra de Negócio: O valor da negociação não pode ser negativo
      if (dados.valor < 0) {
        return {
          sucesso: false,
          mensagem: "O valor da negociação não pode ser negativo.",
        };
      }

      const negociacaoCriada = await this.negociacaoPjRepository.salvar(dados);

      return {
        sucesso: true,
        mensagem: "Negociação PJ criada com sucesso!",
        dados: negociacaoCriada as NegociacaoPj,
      };

    } catch (error: unknown) {
      console.error("[CriarNegociacaoPjUseCase] Erro:", error);
      return {
        sucesso: false,
        mensagem: error instanceof Error ? error.message : "Erro interno ao criar a negociação PJ.",
      };
    }
  }
}