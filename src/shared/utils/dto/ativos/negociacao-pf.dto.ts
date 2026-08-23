import { FaseNegociacaoPf } from "../../types/fase-negociacao-pf.type";

export type CriarNegociacaoPfDTO = {
  titulo: string;
  valor: number;
  descricao?: string;
  fase: FaseNegociacaoPf;
  dataPrevisaoFechamento?: Date;
  motivoPerda?: string;
};