import { Usuario } from "@/shared/types/domain/agentes/IUsuario";

// Omit vence (3 omitidos vs 5 mantidos)
export type CriarUsuarioDTO = Omit<
  Usuario,
  "id" | "dataCriacao" | "dataAtualizacao"
>;