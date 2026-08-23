"use client";

import { useState } from "react";
import { criarNegociacaoPfAction } from "@/actions/ativos/negociacoes/criar-negociacao-pf.action";

export function useCadastrarNegociacaoPf() {
  const [isPending, setIsPending] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const cadastrar = async (formData: FormData) => {
    setIsPending(true);
    setErro(null);

    try {
      const resultado = await criarNegociacaoPfAction(formData);

      if (!resultado.sucesso) {
        setErro(resultado.mensagem);
        return false;
      }

      return true;
    } catch (error) {
      console.error("[Erro no Hook - Negociação PF]:", error);
      setErro("Ocorreu um erro inesperado ao criar a negociação PF.");
      return false;
    } finally {
      setIsPending(false);
    }
  };

  return { cadastrar, isPending, erro };
}