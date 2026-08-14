import { relations } from "drizzle-orm";
import { usuariosTable } from "../schemas/usuario.schema";
import { clientesPfTable } from "../schemas/cliente-pf.schema";
import { clientesPjTable } from "../schemas/cliente-pj.schema";
import { negociacoesPfTable } from "../schemas/negociacao-pf.schema";
import { negociacoesPjTable } from "../schemas/negociacao-pj.schema";
import { tarefasTable } from "../schemas/tarefa.schema";

export const usuariosRelations = relations(usuariosTable, ({ many }) => ({
  clientesPf: many(clientesPfTable),
  clientesPj: many(clientesPjTable),
  negociacoesPf: many(negociacoesPfTable),
  negociacoesPj: many(negociacoesPjTable),
  tarefas: many(tarefasTable),
}));