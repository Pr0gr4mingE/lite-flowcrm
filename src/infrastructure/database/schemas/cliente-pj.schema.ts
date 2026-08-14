import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { usuariosTable } from "./usuario.schema";
import { SegmentoEmpresa } from "@/shared/utils/types/segmento-empresa.type";

export const clientesPjTable = pgTable("clientes_pj", {
  id: uuid("id").defaultRandom().primaryKey(),
  cnpj: text("cnpj").notNull().unique(),
  razaoSocial: text("razao_social").notNull(),
  nomeFantasia: text("nome_fantasia").notNull(),
  email: text("email").notNull(),
  telefone: text("telefone").notNull(),
  segmento: text("segmento").$type<SegmentoEmpresa>(),
  
  usuarioResponsavelId: uuid("usuario_responsavel_id")
    .notNull()
    .references(() => usuariosTable.id),
    
  dataCriacao: timestamp("data_criacao").defaultNow().notNull(),
  dataAtualizacao: timestamp("data_atualizacao").defaultNow().notNull(),
});