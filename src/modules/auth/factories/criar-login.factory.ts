import { UsuarioRepository } from "@/modules/usuario/repositories/usuario.repository";
import { LoginUseCase } from "../use-cases/login.use-case";

export function makeLoginUseCase() {
  const repository = new UsuarioRepository();
  return new LoginUseCase(repository);
}