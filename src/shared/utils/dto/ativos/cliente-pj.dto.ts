import { SegmentoEmpresa } from "../../types/segmento-empresa.type";

export type CriarClientePjDTO = {
  email: string;
  telefone: string;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  segmento:SegmentoEmpresa;
};