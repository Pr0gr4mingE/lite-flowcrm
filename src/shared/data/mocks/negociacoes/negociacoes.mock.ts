// data/mocks/negociacoes/negociacoes.mock.ts

import { NegociacaoPf } from "@/shared/types/domain/negociacoes/INegociacao-pf";
import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";

export const MOCK_NEGOCIACOES_PF: NegociacaoPf[] = [
  {
    id: "neg-pf-1",
    titulo: "Mentoria Bruce Wayne",
    valor: 150000,
    fase: "CAPTURA", 
    usuarioResponsavelId: "user-1",
    clienteId: "cli-pf-1",
    dataCriacao: new Date(),
    dataAtualizacao: new Date(),
  },
  {
    id: "neg-pf-2",
    titulo: "Consultoria Clark Kent",
    valor: 12500,
    fase: "ENGAJAMENTO", 
    usuarioResponsavelId: "user-1",
    clienteId: "cli-pf-2",
    dataCriacao: new Date(),
    dataAtualizacao: new Date(),
  }
];

export const MOCK_NEGOCIACOES_PJ: NegociacaoPj[] = [
  {
    id: "neg-pj-1",
    titulo: "Contrato Stark Industries",
    valor: 850000,
    fase: "FECHADO", 
    usuarioResponsavelId: "user-2",
    clienteId: "cli-pj-1",
    dataCriacao: new Date(),
    dataAtualizacao: new Date(),
  }
];