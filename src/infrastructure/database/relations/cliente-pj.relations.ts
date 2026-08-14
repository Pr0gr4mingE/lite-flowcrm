import { relations } from "drizzle-orm";
import { clientesPjTable } from "../schemas/cliente-pj.schema";
import { usuariosTable } from "../schemas/usuario.schema";
import { negociacoesPjTable } from "../schemas/negociacao-pj.schema";

export const clientesPjRelations = relations(clientesPjTable, ({ one, many }) => ({
  usuarioResponsavel: one(usuariosTable, {
    fields: [clientesPjTable.usuarioResponsavelId],
    references: [usuariosTable.id],
  }),
  negociacoes: many(negociacoesPjTable),
}));