import {ClientePf} from "@/shared/types/domain/clientes/ICliente-pf"

export type ClientePfProps = Omit<ClientePf, "id"|"usuarioResponsavelId"|"dataCriacao"|"dataAtualizacao">