// src/actions/negociacoes/buscar-negocio-pf.action.ts
"use server";

export async function buscarNegociacaoPfAction(id: string) {
  try {
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/negociacao-pf/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!resposta.ok) return null;
    return await resposta.json();
  } catch (error) {
    console.error("[Action Error] Erro ao buscar negócio PF:", error);
    return null;
  }
}