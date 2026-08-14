import { ClientePj } from "@/shared/types/domain/clientes/ICliente-pj";

export type CriarClientePjDTO = Omit<ClientePj, "id" | "dataCriacao" | "dataAtualizacao" | "usuarioResponsavelId">