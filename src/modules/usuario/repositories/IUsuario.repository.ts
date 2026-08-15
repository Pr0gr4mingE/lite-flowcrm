import { CriarUsuarioDTO } from "../dto/criar-usuario.dto";
import { Usuario } from "@/shared/types/domain/agentes/IUsuario";
import { CargoUsuario } from "@/shared/utils/types/cargo-usuario.type";

export interface IUsuarioRepository {
  salvar(dados: CriarUsuarioDTO): Promise<Usuario>;
  
  // Buscas Únicas
  buscarPorId(id: string): Promise<Usuario | null>;
  buscarPorCpf(cpf: string): Promise<Usuario | null>;
  buscarPorEmail(email: string): Promise<Usuario | null>;
  
  // Buscas em Lista
  buscarPorNome(nome: string): Promise<Usuario[]>;
  buscarPorCargo(cargo: CargoUsuario): Promise<Usuario[]>;
}