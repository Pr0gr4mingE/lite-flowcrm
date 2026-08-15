import { UsuarioRepository } from "../repositories/usuario.repository";
import { CriarUsuarioUseCase } from "../use-cases/criar-usuario.use-case";
import { CriarUsuarioHandler } from "../handlers/criar-usuario.handler";

export const makeCriarUsuarioHandler = (): CriarUsuarioHandler => {
  const repository = new UsuarioRepository();
  const useCase = new CriarUsuarioUseCase(repository);
  const handler = new CriarUsuarioHandler(useCase);
  
  return handler;
};