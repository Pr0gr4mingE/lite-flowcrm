// Mocks PJ
import { SegmentoEmpresa } from "@/shared/utils/types/segmento-empresa.type";

export interface MockClientePj {
  id: string; // Adicionado para bater com o mock
  email: string;
  telefone: string;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  segmento?: SegmentoEmpresa; // undefined já é implícito com o '?'
}

export const mockEmpresas: MockClientePj[] = [
  { id: "1", nomeFantasia: "Acme Corp", razaoSocial: "Acme Corporation SA", cnpj: "00.000.000/0001-00", email: "contato@acme.com", telefone: "1133333333" },
  { id: "2", nomeFantasia: "Stark Industries", razaoSocial: "Stark Indústria e Comércio", cnpj: "11.111.111/0001-11", email: "contato@stark.com", telefone: "1144444444" },
  { id: "3", nomeFantasia: "Wayne Enterprises", razaoSocial: "Wayne Investimentos SA", cnpj: "22.222.222/0001-22", email: "contato@wayne.com", telefone: "1155555555" },
];