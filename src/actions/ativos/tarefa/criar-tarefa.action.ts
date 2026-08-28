"use server";

import { revalidatePath } from "next/cache";
import { TipoTarefaB2b } from "@/shared/utils/types/tipo-tarefa-b2b.type";
import { TipoTarefaB2c } from "@/shared/utils/types/tipo-tarefa-b2c.type";
import { TipoTarefa } from "@/shared/utils/types/tipo-tarefa.type";
import { StatusTarefa } from "@/shared/utils/types/status-tarefa.type"; 

type TodosTiposTarefa = TipoTarefa | TipoTarefaB2b | TipoTarefaB2c;

interface CriarTarefaInput {
  negocioId: string;
  titulo: string;
  tipo: TodosTiposTarefa;
  status: StatusTarefa;
  dataVencimento: Date;
  descricao?: string;
}

export async function criarTarefaAction(dados: CriarTarefaInput) {
  try {
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tarefa`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    const respostaJson = await resposta.json();
    revalidatePath("/pipeline"); 
    
    return respostaJson;
  } catch (error) {
    console.error("[Action Error] Erro ao criar tarefa:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}