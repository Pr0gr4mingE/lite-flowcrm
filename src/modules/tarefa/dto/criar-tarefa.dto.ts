import { Tarefa } from "@/shared/types/domain/tarefas/ITarefa";

// Omit vence (4 omitidos vs 7 mantidos)
// Mantemos clienteId e negociacaoId porque o backend não tem como adivinhar para qual cliente o usuário está criando a tarefa, o front-end precisa enviar isso.
export type CriarTarefaDTO = Omit<
  Tarefa,
  "id" | "usuarioResponsavelId" | "dataCriacao" | "dataAtualizacao"
>;