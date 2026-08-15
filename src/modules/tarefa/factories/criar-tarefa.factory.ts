import { TarefaRepository } from "../repositories/tarefa.repository";
import { CriarTarefaUseCase } from "../use-cases/criar-tarefa.use-case";
import { CriarTarefaHandler } from "../handlers/criar-tarefa.handler";

export const makeCriarTarefaHandler = (): CriarTarefaHandler => {
  const repository = new TarefaRepository();
  const useCase = new CriarTarefaUseCase(repository);
  return new CriarTarefaHandler(useCase);
};