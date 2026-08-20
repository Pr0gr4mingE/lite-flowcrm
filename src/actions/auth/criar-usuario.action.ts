"use server";

export async function criarUsuarioAction(formData: FormData) {
  // Extraímos tudo que o DTO do Back-end exige
  const nome = formData.get("nome");
  const email = formData.get("email");
  const senha = formData.get("password");
  const cpf = formData.get("cpf");
  const cargo = formData.get("cargo");

  try {
    const resposta = await fetch(process.env.NEXT_PUBLIC_API_URL + "/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, senha, cpf, cargo }),
    });

    const dados = await resposta.json();
    return dados; 
  } catch (error) {
    console.error("[Action Error] Erro ao criar usuário:", error);
    return { sucesso: false, mensagem: "Erro interno de conexão com a API." };
  }
}