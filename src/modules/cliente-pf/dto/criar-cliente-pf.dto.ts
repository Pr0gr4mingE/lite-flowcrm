import { ClientePf } from "@/shared/types/domain/clientes/ICliente-pf";

export type CriarClientePfDTO = Omit<ClientePf, "id" | "dataCriacao" | "dataAtualizacao" | "usuarioResponsavelId">