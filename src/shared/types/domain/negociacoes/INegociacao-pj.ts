import { FaseNegociacaoPj } from "@/shared/utils/types/fase-negociacao-pj.type";

export interface NegociacaoPj {
  id: string;
  titulo: string;
  valor: number;
  descricao?: string
  fase: FaseNegociacaoPj;
  dataPrevisaoFechamento?: Date
  motivoPerda?: string
  usuarioResponsavelId: string;
  clienteId: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
}