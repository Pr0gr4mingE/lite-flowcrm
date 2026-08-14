import { CargoUsuario } from "@/shared/utils/types/cargo-usuario.type";

export interface Usuario {
  id: string;
  cpf: string;
  nome: string;
  cargo: CargoUsuario;
  email: string;
  senha: string; 
  dataCriacao: Date;
  dataAtualizacao: Date;
}