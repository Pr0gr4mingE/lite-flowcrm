export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const senha = formData.get("password");

  try {
    // Apontando para a futura rota de autenticação
    const resposta = await fetch("/api/auth/login", { 
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senha }),
    });

    const dados = await resposta.json();
    return dados;
  } catch (error) {
    console.error("[Action Error] Erro ao realizar login:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão." };
  }
}