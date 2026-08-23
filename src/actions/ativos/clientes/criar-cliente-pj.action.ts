"use server";

import { CriarClientePjDTO } from "@/shared/utils/dto/ativos/cliente-pj.dto";
import { SegmentoEmpresa } from "@/shared/utils/types/segmento-empresa.type";

export async function criarClientePjAction(formData: FormData) {
  const isVisitorMode = formData.get("isVisitorMode") === "true";

  const payload: CriarClientePjDTO = {
    razaoSocial: formData.get("razaoSocial") as string,
    nomeFantasia: formData.get("nomeFantasia") as string,
    cnpj: formData.get("cnpj") as string,
    segmento: formData.get("segmento") as SegmentoEmpresa,
    email: formData.get("email") as string,
    telefone: formData.get("telefone") as string,
  };

  if (isVisitorMode) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return { sucesso: true, id: `mock-cli-pj-${Date.now()}`, mensagem: "Empresa criada no Modo Visitante!" };
  }

  try {
    const resposta = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cliente-pj`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const dados = await resposta.json();
    if (!resposta.ok) throw new Error(dados.mensagem || "Erro na API");

    return { sucesso: true, id: dados.id, mensagem: "Empresa criada com sucesso!" };
  } catch (error) {
    console.error("[Action Error] Erro ao criar Cliente PJ:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}