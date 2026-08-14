import { relations } from "drizzle-orm";
import { negociacoesPfTable } from "../schemas/negociacao-pf.schema";
import { usuariosTable } from "../schemas/usuario.schema";
import { clientesPfTable } from "../schemas/cliente-pf.schema";

export const negociacoesPfRelations = relations(negociacoesPfTable, ({ one }) => ({
  usuarioResponsavel: one(usuariosTable, {
    fields: [negociacoesPfTable.usuarioResponsavelId],
    references: [usuariosTable.id],
  }),
  cliente: one(clientesPfTable, {
    fields: [negociacoesPfTable.clienteId],
    references: [clientesPfTable.id],
  }),
}));