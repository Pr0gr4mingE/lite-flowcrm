import { FaseNegociacaoPf } from "@/shared/utils/types/fase-negociacao-pf.type";

export interface NegociacaoPf {
  id: string;
  titulo: string;
  valor: number;
  descricao?: string
  fase: FaseNegociacaoPf;
  dataPrevisaoFechamento?: Date
  motivoPerda?: string
  usuarioResponsavelId: string;
  clienteId: string;
  dataCriacao: Date;
  dataAtualizacao: Date;
}