import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";
import { CargoUsuario } from "@/shared/utils/types/cargo-usuario.type";

export const usuariosTable = pgTable("usuarios", {
  id: uuid("id").defaultRandom().primaryKey(),
  cpf: text("cpf").notNull().unique(),
  nome: text("nome").notNull(),
  
  // Aqui a mágica acontece: o Drizzle respeita o seu utilitário!
  cargo: text("cargo").$type<CargoUsuario>().notNull(),
  
  email: text("email").notNull().unique(),
  senha: text("senha").notNull(),
  
  // O próprio banco preenche essas datas sozinho
  dataCriacao: timestamp("data_criacao").defaultNow().notNull(),
  dataAtualizacao: timestamp("data_atualizacao").defaultNow().notNull(),
});