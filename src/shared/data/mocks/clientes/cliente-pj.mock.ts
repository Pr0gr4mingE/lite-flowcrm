// src/data/mocks/ativos/cliente-pj.mock.ts

import { ClientePj } from "@/shared/types/domain/clientes/ICliente-pj";

export const MOCK_CLIENTES_PJ: ClientePj[] = [
  { 
    id: "e1", 
    nomeFantasia: "Acme Corp", 
    razaoSocial: "Acme Corporation SA", 
    cnpj: "00.000.000/0001-00", 
    email: "contato@acme.com", 
    telefone: "1133333333",
    segmento: "TECNOLOGIA",
    usuarioResponsavelId: "user-1",
    dataCriacao: new Date("2026-07-15T10:00:00"),
    dataAtualizacao: new Date("2026-07-16T14:30:00"),
  },
  { 
    id: "e2", 
    nomeFantasia: "Stark Industries", 
    razaoSocial: "Stark Indústria e Comércio", 
    cnpj: "11.111.111/0001-11", 
    email: "contato@stark.com", 
    telefone: "1144444444",
    segmento: "INDUSTRIA",
    usuarioResponsavelId: "user-2",
    dataCriacao: new Date("2026-08-01T09:15:00"),
    dataAtualizacao: new Date("2026-08-05T09:15:00"),
  },
];