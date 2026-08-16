export async function criarUsuarioAction(formData: FormData) {
  const nome = formData.get("nome");
  const email = formData.get("email");
  const senha = formData.get("password");

  try {
    const resposta = await fetch("/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha }),
    });

    const dados = await resposta.json();
    return dados; // Retorna o DTO com { sucesso, mensagem, dados? }
  } catch (error) {
    console.error("[Action Error] Erro ao criar usuário:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão." };
  }
}