import {Usuario} from "@/shared/types/domain/agentes/IUsuario"

export type CriarLoginDTO = Pick<Usuario, "senha" | "email">