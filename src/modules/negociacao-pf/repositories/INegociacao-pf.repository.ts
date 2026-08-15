import { CriarNegociacaoPfDTO } from "../dto/criar-negociacao-pf.dto";
import { NegociacaoPf } from "@/shared/types/domain/negociacoes/INegociacao-pf";
import { FaseNegociacaoPf } from "@/shared/utils/types/fase-negociacao-pf.type";

export interface INegociacaoPfRepository {
  salvar(dados: CriarNegociacaoPfDTO): Promise<NegociacaoPf>;
  
  // Buscas Únicas
  buscarPorId(id: string): Promise<NegociacaoPf | null>;
  
  // Buscas em Lista
  buscarPorFase(fase: FaseNegociacaoPf): Promise<NegociacaoPf[]>;
  buscarPorDataPrevisao(dataInicial: Date, dataFinal: Date): Promise<NegociacaoPf[]>; // Geralmente buscamos por intervalo
}