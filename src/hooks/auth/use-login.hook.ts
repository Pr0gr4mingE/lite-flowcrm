import { useState, FormEvent } from "react";
import { loginAction } from "@/actions/auth/login.action";
import { useRouter } from "next/navigation";

export function useLogin() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCarregando(true);
    setMensagem(null);

    const formData = new FormData(e.currentTarget);
    const resultado = await loginAction(formData);

    if (!resultado.sucesso) {
      setMensagem(resultado.mensagem || "Credenciais inválidas.");
      setCarregando(false);
    } else {
      setMensagem("Login realizado com sucesso! Redirecionando..."); 
      
      // O Cookie já está salvo pela Server Action. Só mandar pra rota privada!
      router.push("/dashboard"); 
    }
  };

  return { handleSubmit, carregando, mensagem };
}