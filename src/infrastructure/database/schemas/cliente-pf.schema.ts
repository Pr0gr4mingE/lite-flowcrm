import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { usuariosTable } from "./usuario.schema";

export const clientesPfTable = pgTable("clientes_pf", {
  id: uuid("id").defaultRandom().primaryKey(),
  cpf: text("cpf").notNull().unique(),
  nome: text("nome").notNull(),
  email: text("email").notNull(),
  telefone: text("telefone").notNull(),
  
  // Chave estrangeira ligando ao Usuário Responsável
  usuarioResponsavelId: uuid("usuario_responsavel_id")
    .notNull()
    .references(() => usuariosTable.id),
    
  dataCriacao: timestamp("data_criacao").defaultNow().notNull(),
  dataAtualizacao: timestamp("data_atualizacao").defaultNow().notNull(),
});