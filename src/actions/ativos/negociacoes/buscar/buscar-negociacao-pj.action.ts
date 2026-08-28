// src/actions/negociacoes/buscar-negocio-pj.action.ts
"use server";

export async function buscarNegociacaoPjAction(id: string) {
  try {
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/negociacao-pj/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      cache: "no-store",
    });

    if (!resposta.ok) return null;
    return await resposta.json();
  } catch (error) {
    console.error("[Action Error] Erro ao buscar negócio PJ:", error);
    return null;
  }
}