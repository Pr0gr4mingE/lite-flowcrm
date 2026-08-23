"use client";

import { useState } from "react";
import { criarClientePjAction } from "@/actions/ativos/clientes/criar-cliente-pj.action";

export function useCadastrarClientePj() {
  const [isPending, setIsPending] = useState(false);
  const [erro, setErro] = useState<string | null>(null);

  const cadastrar = async (formData: FormData) => {
    setIsPending(true);
    setErro(null);

    try {
      const resultado = await criarClientePjAction(formData);

      if (!resultado.sucesso) {
        setErro(resultado.mensagem);
        return { sucesso: false };
      }

      return { sucesso: true, id: resultado.id };
    } catch (error) {
      console.error("[Erro no Hook - Cliente PJ]:", error);
      setErro("Ocorreu um erro inesperado ao cadastrar a empresa PJ.");
      return { sucesso: false };
    } finally {
      setIsPending(false);
    }
  };

  return { cadastrar, isPending, erro };
}