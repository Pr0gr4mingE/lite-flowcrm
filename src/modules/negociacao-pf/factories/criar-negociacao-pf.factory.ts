import { NegociacaoPfRepository } from "../repositories/negociacao-pf.repository";
import { CriarNegociacaoPfUseCase } from "../use-cases/criar-negociacao-pf.use-case";
import { CriarNegociacaoPfHandler } from "../handlers/criar-negociacao-pf.handler";

export const makeCriarNegociacaoPfHandler = (): CriarNegociacaoPfHandler => {
  const repository = new NegociacaoPfRepository();
  const useCase = new CriarNegociacaoPfUseCase(repository);
  return new CriarNegociacaoPfHandler(useCase);
};