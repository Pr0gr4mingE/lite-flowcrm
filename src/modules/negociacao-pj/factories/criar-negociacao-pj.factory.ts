import { NegociacaoPjRepository } from "../repositories/negociacao-pj.repository";
import { CriarNegociacaoPjUseCase } from "../use-cases/criar-negociacao-pj.use-case";
import { CriarNegociacaoPjHandler } from "../handlers/criar-negociacao-pj.handler";

export const makeCriarNegociacaoPjHandler = (): CriarNegociacaoPjHandler => {
  const repository = new NegociacaoPjRepository();
  const useCase = new CriarNegociacaoPjUseCase(repository);
  return new CriarNegociacaoPjHandler(useCase);
};