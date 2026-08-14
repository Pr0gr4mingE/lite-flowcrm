import { relations } from "drizzle-orm";
import { clientesPfTable } from "../schemas/cliente-pf.schema";
import { usuariosTable } from "../schemas/usuario.schema";
import { negociacoesPfTable } from "../schemas/negociacao-pf.schema";

export const clientesPfRelations = relations(clientesPfTable, ({ one, many }) => ({
  usuarioResponsavel: one(usuariosTable, {
    fields: [clientesPfTable.usuarioResponsavelId],
    references: [usuariosTable.id],
  }),
  negociacoes: many(negociacoesPfTable),
}));