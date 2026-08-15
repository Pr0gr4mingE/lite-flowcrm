import { ClientePfRepository } from "../repositories/cliente-pf.repository";
import { CriarClientePfUseCase } from "../use-cases/criar-cliente-pf.use-case";
import { CriarClientePfHandler } from "../handlers/criar-cliente-pf.handler";

export const makeCriarClientePfHandler = (): CriarClientePfHandler => {
  const repository = new ClientePfRepository();
  const useCase = new CriarClientePfUseCase(repository);
  return new CriarClientePfHandler(useCase);
};