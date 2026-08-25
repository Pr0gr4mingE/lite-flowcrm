import {NegociacaoPj} from "@/shared/types/domain/negociacoes/INegociacao-pj"

export type NegociacaoPjProps = Omit<NegociacaoPj, "id"
|"usuarioResponsavelId"
|"dataCriacao"
|"dataAtualizacao"
|"motivoPerda?"
|"clienteId">
