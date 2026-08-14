import { NegociacaoPf } from "@/shared/types/domain/negociacoes/INegociacao-pf";

export type CriarNegociacaoPfDTO = Omit<
  NegociacaoPf, 
  "id" | "usuarioResponsavelId" | "clienteId" | "dataCriacao" | "dataAtualizacao"
>;