import { ClientePjRepository } from "../repositories/cliente-pj.repository";
import { CriarClientePjUseCase } from "../use-cases/criar-cliente-pj.use-case";
import { CriarClientePjHandler } from "../handlers/criar-cliente-pj.handler";

export const makeCriarClientePjHandler = (): CriarClientePjHandler => {
  const repository = new ClientePjRepository();
  const useCase = new CriarClientePjUseCase(repository);
  return new CriarClientePjHandler(useCase);
};