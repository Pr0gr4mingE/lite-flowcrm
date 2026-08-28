// src/actions/negociacoes/atualizar-negocio-pj.action.ts
"use server";

import { revalidatePath } from "next/cache";

interface AtualizarNegocioPjInput {
  id: string;
  titulo: string;
  valor: number;
  status: string; // Ajuste para o seu type de Status
  cnpj?: string;
  // Adicione outros campos se necessário
}

export async function atualizarNegociacaoPjAction(dados: AtualizarNegocioPjInput) {
  try {
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/negociacao-pj/${dados.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    const respostaJson = await resposta.json();
    revalidatePath("/pipeline"); 
    
    return respostaJson;
  } catch (error) {
    console.error("[Action Error] Erro ao atualizar negócio PJ:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}