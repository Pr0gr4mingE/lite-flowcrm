import { eq, between } from "drizzle-orm";
import { db } from "@/infrastructure/database/db";
import { negociacoesPjTable } from "@/infrastructure/database/schemas/negociacao-pj.schema";
import { INegociacaoPjRepository } from "./INegociacao-pj.repository";
import { CriarNegociacaoPjDTO } from "../dto/criar-negociacao-pj.dto";
import { NegociacaoPj } from "@/shared/types/domain/negociacoes/INegociacao-pj";
import { FaseNegociacaoPj } from "@/shared/utils/types/fase-negociacao-pj.type";

export class NegociacaoPjRepository implements INegociacaoPjRepository {
  async salvar(dados: CriarNegociacaoPjDTO): Promise<NegociacaoPj> {
    const [novaNegociacao] = await db
      .insert(negociacoesPjTable)
      .values(dados as typeof negociacoesPjTable.$inferInsert) // <-- Correção aplicada
      .returning();
    return novaNegociacao as NegociacaoPj;
  }

  // ... (buscas inalteradas)
  async buscarPorId(id: string): Promise<NegociacaoPj | null> {
    const [negociacao] = await db.select().from(negociacoesPjTable).where(eq(negociacoesPjTable.id, id));
    return (negociacao as NegociacaoPj) || null;
  }
  async buscarPorFase(fase: FaseNegociacaoPj): Promise<NegociacaoPj[]> {
    const negociacoes = await db.select().from(negociacoesPjTable).where(eq(negociacoesPjTable.fase, fase));
    return negociacoes as NegociacaoPj[];
  }
  async buscarPorDataPrevisao(dataInicial: Date, dataFinal: Date): Promise<NegociacaoPj[]> {
    const negociacoes = await db.select().from(negociacoesPjTable).where(between(negociacoesPjTable.dataPrevisaoFechamento, dataInicial, dataFinal));
    return negociacoes as NegociacaoPj[];
  }
}