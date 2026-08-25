"use server";

import { NegociacaoPfProps } from "@/shared/utils/props/ativos/negociacao-pf.props";
import { FaseNegociacaoPf } from "@/shared/utils/types/fase-negociacao-pf.type";

export async function criarNegociacaoPfAction(formData: FormData) {
  const isVisitorMode = formData.get("isVisitorMode") === "true";
  const clienteId = formData.get("clienteId") as string; // Necessário para vincular!
  
  const dataPrevisaoStr = formData.get("dataPrevisaoFechamento") as string;

  const payload: NegociacaoPfProps = {
    titulo: formData.get("titulo") as string,
    valor: Number(formData.get("valor")),
    fase: formData.get("fase") as FaseNegociacaoPf,
    descricao: formData.get("descricao") as string || undefined,
    dataPrevisaoFechamento: dataPrevisaoStr ? new Date(dataPrevisaoStr) : undefined,
  };

  if (isVisitorMode) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { sucesso: true, mensagem: "Negociação PF criada no Modo Visitante!" };
  }

  try {
    // Note que estou passando o clienteId via URL ou Body dependendo de como sua API espera.
    // Aqui estou mandando no body junto com o DTO para simplificar. Ajuste conforme sua API!
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/negociacao-pf`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, clienteId }), 
    });

    const dados = await resposta.json();
    if (!resposta.ok) throw new Error(dados.mensagem || "Erro na API");

    return { sucesso: true, mensagem: "Negociação PF criada com sucesso!" };
  } catch (error) {
    console.error("[Action Error] Erro ao criar Negociação PF:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}