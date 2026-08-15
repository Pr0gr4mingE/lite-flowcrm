import { CriarNegociacaoPjDTO } from "../dto/criar-negociacao-pj.dto";
import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";
import { FaseNegociacaoPj } from "@/shared/utils/types/fase-negociacao-pj.type";

export interface INegociacaoPjRepository {
  salvar(dados: CriarNegociacaoPjDTO): Promise<NegociacaoPj>;
  
  // Buscas Únicas
  buscarPorId(id: string): Promise<NegociacaoPj | null>;
  
  // Buscas em Lista
  buscarPorFase(fase: FaseNegociacaoPj): Promise<NegociacaoPj[]>;
  buscarPorDataPrevisao(dataInicial: Date, dataFinal: Date): Promise<NegociacaoPj[]>;
}