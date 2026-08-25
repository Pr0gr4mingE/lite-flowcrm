import {NegociacaoPf} from "@/shared/types/domain/negociacoes/INegociacao-pf"

export type NegociacaoPfProps = Omit<NegociacaoPf, "id"
|"usuarioResponsavelId"
|"dataCriacao"
|"dataAtualizacao"
|"motivoPerda?"
|"clienteId">
