import { useState, FormEvent } from "react";
import { criarUsuarioAction } from "@/actions/auth/criar-usuario.action";
import { useRouter } from "next/navigation";

export function useCadastro() {
  const [carregando, setCarregando] = useState(false);
  const [mensagem, setMensagem] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // 1. Salva a referência do form ANTES do await
    const form = e.currentTarget; 

    setCarregando(true);
    setMensagem(null);

    const formData = new FormData(form);
    const resultado = await criarUsuarioAction(formData);

    setMensagem(resultado.mensagem);
    setCarregando(false);

    if (resultado.sucesso) {
      // 2. Usa a variável salva para dar o reset
      form.reset(); 
      
      // Dá tempo do usuário ler o sucesso e joga ele pro Login
      setTimeout(() => {
        router.push("/login");
      }, 1500);
    }
  };

  return { handleSubmit, carregando, mensagem };
}