import { useState, FormEvent } from "react";
import { loginAction } from "@/actions/auth/login.action";

export function useLogin() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCarregando(true);
    setMensagem(null);

    const formData = new FormData(e.currentTarget);
    const resultado = await loginAction(formData);

    if (!resultado.sucesso) {
      setMensagem(resultado.mensagem || "Credenciais inválidas.");
    } else {
      // Se deu certo, aqui no futuro vai o router.push('/dashboard')
      setMensagem("Login realizado com sucesso!"); 
    }
    
    setCarregando(false);
  };

  return { handleSubmit, carregando, mensagem };
}