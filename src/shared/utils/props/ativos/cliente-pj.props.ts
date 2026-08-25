import {ClientePj} from "@/shared/types/domain/clientes/ICliente-pj"

export type ClientePjProps = Omit<ClientePj, "id"|"usuarioResponsavelId"|"dataCriacao"|"dataAtualizacao">
