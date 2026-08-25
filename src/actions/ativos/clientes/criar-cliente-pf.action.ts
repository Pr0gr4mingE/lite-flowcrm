"use server";

import { ClientePfProps } from "@/shared/utils/props/ativos/cliente-pf.props";

export async function criarClientePfAction(formData: FormData) {
  const isVisitorMode = formData.get("isVisitorMode") === "true";

  // 1. Extração e tipagem baseada no DTO
  const payload: ClientePfProps = {
    nome: formData.get("nome") as string,
    cpf: formData.get("cpf") as string,
    email: formData.get("email") as string,
    telefone: formData.get("telefone") as string,
  };

  // 2. Comportamento do Modo Visitante
  if (isVisitorMode) {
    // Simulando o tempo de rede
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { 
      sucesso: true, 
      id: `mock-cli-pf-${Date.now()}`, // Retornamos um ID falso para a cascata funcionar
      mensagem: "Cliente PF criado no Modo Visitante!" 
    };
  }

  // 3. Comportamento Real (Conexão com a API)
  try {
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cliente-pf`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const dados = await resposta.json();
    if (!resposta.ok) throw new Error(dados.mensagem || "Erro na API");

    return { sucesso: true, id: dados.id, mensagem: "Cliente PF criado com sucesso!" };
  } catch (error) {
    console.error("[Action Error] Erro ao criar Cliente PF:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}