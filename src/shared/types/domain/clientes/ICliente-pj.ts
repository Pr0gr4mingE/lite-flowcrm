import { SegmentoEmpresa } from "@/shared/utils/types/segmento-empresa.type";

export interface ClientePj {
  id: string;
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  email: string;
  telefone: string;
  segmento?: SegmentoEmpresa;
  usuarioResponsavelId: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
}