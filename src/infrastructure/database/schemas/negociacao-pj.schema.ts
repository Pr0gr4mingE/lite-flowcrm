import { pgTable, text, timestamp, uuid, real } from "drizzle-orm/pg-core";
import { usuariosTable } from "./usuario.schema";
import { clientesPjTable } from "./cliente-pj.schema";
import { FaseNegociacaoPj } from "@/shared/utils/types/fase-negociacao-pj.type";

export const negociacoesPjTable = pgTable("negociacoes_pj", {
  id: uuid("id").defaultRandom().primaryKey(),
  titulo: text("titulo").notNull(),
  valor: real("valor").notNull(),
  descricao: text("descricao"),
  fase: text("fase").$type<FaseNegociacaoPj>().notNull(),
  dataPrevisaoFechamento: timestamp("data_previsao_fechamento"),
  motivoPerda: text("motivo_perda"),
  
  usuarioResponsavelId: uuid("usuario_responsavel_id")
    .notNull()
    .references(() => usuariosTable.id),
    
  clienteId: uuid("cliente_id")
    .notNull()
    .references(() => clientesPjTable.id),
    
  dataCriacao: timestamp("data_criacao").defaultNow().notNull(),
  dataAtualizacao: timestamp("data_atualizacao").defaultNow().notNull(),
});