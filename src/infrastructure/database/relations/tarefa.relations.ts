import { relations } from "drizzle-orm";
import { tarefasTable } from "../schemas/tarefa.schema";
import { usuariosTable } from "../schemas/usuario.schema";

export const tarefasRelations = relations(tarefasTable, ({ one }) => ({
  usuarioResponsavel: one(usuariosTable, {
    fields: [tarefasTable.usuarioResponsavelId],
    references: [usuariosTable.id],
  }),
}));