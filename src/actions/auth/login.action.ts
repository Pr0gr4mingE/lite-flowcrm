"use server";

import { cookies } from "next/headers";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const senha = formData.get("password");

  try {
    // Aqui usamos a URL absoluta se o back-end estiver em outro servidor, 
    // ou process.env.NEXT_PUBLIC_API_URL
    const resposta = await fetch(process.env.NEXT_PUBLIC_API_URL + "/auth", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const dados = await resposta.json();

    // O back-end devolveu sucesso? O front-end gerencia a sessão!
    if (dados.sucesso && dados.dados) {
      (await cookies()).set({
        name: "session_token",
        value: String(dados.dados.id),
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    }

    return dados;
  } catch (error) {
    console.error("[Action Error] Erro ao realizar login:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}