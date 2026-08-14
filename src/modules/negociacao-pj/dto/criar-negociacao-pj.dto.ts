import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";

export type CriarNegociacaoPjDTO = Omit<
  NegociacaoPj, 
  "id" | "usuarioResponsavelId" | "clienteId" | "dataCriacao" | "dataAtualizacao"
>;