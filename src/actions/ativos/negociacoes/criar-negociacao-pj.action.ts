"use server";

import { NegociacaoPjProps } from "@/shared/utils/props/ativos/negociacao-pj.props";
import { FaseNegociacaoPj } from "@/shared/utils/types/fase-negociacao-pj.type";

export async function criarNegociacaoPjAction(formData: FormData) {
  const isVisitorMode = formData.get("isVisitorMode") === "true";
  const clienteId = formData.get("clienteId") as string;
  
  const dataPrevisaoStr = formData.get("dataPrevisaoFechamento") as string;

  const payload: NegociacaoPjProps = {
    titulo: formData.get("titulo") as string,
    valor: Number(formData.get("valor")),
    fase: formData.get("fase") as FaseNegociacaoPj,
    descricao: formData.get("descricao") as string || undefined,
    dataPrevisaoFechamento: dataPrevisaoStr ? new Date(dataPrevisaoStr) : undefined,
  };

  if (isVisitorMode) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { sucesso: true, mensagem: "Negociação Corporativa criada no Modo Visitante!" };
  }

  try {
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/negociacao-pj`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, clienteId }),
    });

    const dados = await resposta.json();
    if (!resposta.ok) throw new Error(dados.mensagem || "Erro na API");

    return { sucesso: true, mensagem: "Negociação PJ criada com sucesso!" };
  } catch (error) {
    console.error("[Action Error] Erro ao criar Negociação PJ:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}