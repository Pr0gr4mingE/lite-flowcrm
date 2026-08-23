// src/data/mocks/ativos/cliente-pf.mock.ts

import { ClientePf } from "@/shared/types/domain/clientes/ICliente-pf"; 

export const MOCK_CLIENTES_PF: ClientePf[] = [
  {
    id: "cli-pf-1",
    nome: "Bruce Wayne",
    email: "bruce@wayne.com",
    cpf: "444.444.444-44",
    telefone: "11955555555",
    usuarioResponsavelId: "user-1",
    dataCriacao: new Date("2026-08-10T10:00:00"),
    dataAtualizacao: new Date("2026-08-15T14:30:00"),
  },
  {
    id: "cli-pf-2",
    nome: "Clark Kent",
    email: "clark@dailyplanet.com",
    cpf: "111.222.333-44",
    telefone: "11911112222",
    usuarioResponsavelId: "user-2",
    dataCriacao: new Date("2026-08-12T09:15:00"),
    dataAtualizacao: new Date("2026-08-12T09:15:00"),
  },
  {
    id: "cli-pf-3",
    nome: "Lucius Fox",
    email: "lucius@wayne.com",
    cpf: "555.555.555-55",
    telefone: "11944444444",
    usuarioResponsavelId: "user-1",
    dataCriacao: new Date("2026-08-20T16:00:00"),
    dataAtualizacao: new Date("2026-08-22T08:00:00"),
  }
];