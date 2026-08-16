import { useState, FormEvent } from "react";
import { criarUsuarioAction } from "@/actions/auth/criar-usuario.action";

export function useCadastro() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCarregando(true);
    setMensagem(null);

    const formData = new FormData(e.currentTarget);
    const resultado = await criarUsuarioAction(formData);

    setMensagem(resultado.mensagem);
    setCarregando(false);

    if (resultado.sucesso) {
      e.currentTarget.reset(); // Limpa o formulário se deu certo
    }
  };

  return { handleSubmit, carregando, mensagem };
}