import { relations } from "drizzle-orm";
import { negociacoesPjTable } from "../schemas/negociacao-pj.schema";
import { usuariosTable } from "../schemas/usuario.schema";
import { clientesPjTable } from "../schemas/cliente-pj.schema";

export const negociacoesPjRelations = relations(negociacoesPjTable, ({ one }) => ({
  usuarioResponsavel: one(usuariosTable, {
    fields: [negociacoesPjTable.usuarioResponsavelId],
    references: [usuariosTable.id],
  }),
  cliente: one(clientesPjTable, {
    fields: [negociacoesPjTable.clienteId],
    references: [clientesPjTable.id],
  }),
}));