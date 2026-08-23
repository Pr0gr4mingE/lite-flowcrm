import { FaseNegociacaoPj } from "../../types/fase-negociacao-pj.type";

export type CriarNegociacaoPjDTO = {
  titulo: string;
  valor: number;
  descricao?: string;
  fase: FaseNegociacaoPj;
  dataPrevisaoFechamento?: Date;
  motivoPerda?: string;
};