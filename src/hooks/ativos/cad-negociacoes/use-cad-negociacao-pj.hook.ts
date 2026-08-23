"use client";

import { useState } from "react";
import { criarNegociacaoPjAction } from "@/actions/ativos/negociacoes/criar-negociacao-pj.action";

export function useCadastrarNegociacaoPj() {
  const [isPending, setIsPending] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const cadastrar = async (formData: FormData) => {
    setIsPending(true);
    setErro(null);

    try {
      const resultado = await criarNegociacaoPjAction(formData);

      if (!resultado.sucesso) {
        setErro(resultado.mensagem);
        return false;
      }

      return true;
    } catch (error) {
      console.error("[Erro no Hook - Negociação PJ]:", error);
      setErro("Ocorreu um erro inesperado ao criar a negociação PJ.");
      return false;
    } finally {
      setIsPending(false);
    }
  };

  return { cadastrar, isPending, erro };
}