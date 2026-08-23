"use client";

import { useState } from "react";
import { criarClientePfAction } from "@/actions/ativos/clientes/criar-cliente-pf.action";

export function useCadastrarClientePf() {
  const [isPending, setIsPending] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const cadastrar = async (formData: FormData) => {
    setIsPending(true);
    setErro(null);

    try {
      const resultado = await criarClientePfAction(formData);

      if (!resultado.sucesso) {
        setErro(resultado.mensagem);
        return { sucesso: false };
      }

      return { sucesso: true, id: resultado.id };
    } catch (error) {
      console.error("[Erro no Hook - Cliente PF]:", error);
      setErro("Ocorreu um erro inesperado ao cadastrar o cliente PF.");
      return { sucesso: false };
    } finally {
      setIsPending(false);
    }
  };

  return { cadastrar, isPending, erro };
}