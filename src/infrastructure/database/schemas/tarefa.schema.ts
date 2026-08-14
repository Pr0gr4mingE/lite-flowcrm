import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { usuariosTable } from "./usuario.schema";
import { StatusTarefa } from "@/shared/utils/types/status-tarefa.type";
import { TipoTarefa } from "@/shared/utils/types/tipo-tarefa.type";
import { TipoTarefaB2b } from "@/shared/utils/types/tipo-tarefa-b2b.type";
import { TipoTarefaB2c } from "@/shared/utils/types/tipo-tarefa-b2c.type";

export const tarefasTable = pgTable("tarefas", {
  id: uuid("id").defaultRandom().primaryKey(),
  titulo: text("titulo").notNull(),
  tipo: text("tipo").$type<TipoTarefa | TipoTarefaB2b | TipoTarefaB2c>().notNull(),
  
  usuarioResponsavelId: uuid("usuario_responsavel_id")
    .notNull()
    .references(() => usuariosTable.id),
    
  // IDs Polimórficos: Podem apontar para a tabela PF ou PJ
  clienteId: uuid("cliente_id"),
  negociacaoId: uuid("negociacao_id"),
  
  descricao: text("descricao"),
  status: text("status").$type<StatusTarefa>().notNull(),
  dataVencimento: timestamp("data_vencimento").notNull(),
  
  dataCriacao: timestamp("data_criacao").defaultNow().notNull(),
  dataAtualizacao: timestamp("data_atualizacao").defaultNow().notNull(),
});