import { eq, between } from "drizzle-orm";
import { db } from "@/infrastructure/database/db";
import { tarefasTable } from "@/infrastructure/database/schemas/tarefa.schema";
import { ITarefaRepository } from "./ITarefa.repository";
import { CriarTarefaDTO } from "../dto/criar-tarefa.dto";
import { Tarefa } from "@/shared/types/domain/tarefas/ITarefa";
import { StatusTarefa } from "@/shared/utils/types/status-tarefa.type";
import { TipoTarefa } from "@/shared/utils/types/tipo-tarefa.type";
import { TipoTarefaB2b } from "@/shared/utils/types/tipo-tarefa-b2b.type";
import { TipoTarefaB2c } from "@/shared/utils/types/tipo-tarefa-b2c.type";

export class TarefaRepository implements ITarefaRepository {
  async salvar(dados: CriarTarefaDTO): Promise<Tarefa> {
    const [novaTarefa] = await db
      .insert(tarefasTable)
      .values(dados as typeof tarefasTable.$inferInsert) // <-- Correção aplicada
      .returning();
    return novaTarefa as Tarefa;
  }

  // ... (buscas inalteradas)
  async buscarPorId(id: string): Promise<Tarefa | null> {
    const [tarefa] = await db.select().from(tarefasTable).where(eq(tarefasTable.id, id));
    return (tarefa as Tarefa) || null;
  }
  async buscarPorStatus(status: StatusTarefa): Promise<Tarefa[]> {
    const tarefas = await db.select().from(tarefasTable).where(eq(tarefasTable.status, status));
    return tarefas as Tarefa[];
  }
  async buscarPorTipo(tipo: TipoTarefa | TipoTarefaB2b | TipoTarefaB2c): Promise<Tarefa[]> {
    const tarefas = await db.select().from(tarefasTable).where(eq(tarefasTable.tipo, tipo as TipoTarefa | TipoTarefaB2b | TipoTarefaB2c));
    return tarefas as Tarefa[];
  }
  async buscarPorClienteId(clienteId: string): Promise<Tarefa[]> {
    const tarefas = await db.select().from(tarefasTable).where(eq(tarefasTable.clienteId, clienteId));
    return tarefas as Tarefa[];
  }
  async buscarPorNegociacaoId(negociacaoId: string): Promise<Tarefa[]> {
    const tarefas = await db.select().from(tarefasTable).where(eq(tarefasTable.negociacaoId, negociacaoId));
    return tarefas as Tarefa[];
  }
  async buscarPorDataVencimento(dataInicial: Date, dataFinal: Date): Promise<Tarefa[]> {
    const tarefas = await db.select().from(tarefasTable).where(between(tarefasTable.dataVencimento, dataInicial, dataFinal));
    return tarefas as Tarefa[];
  }
}