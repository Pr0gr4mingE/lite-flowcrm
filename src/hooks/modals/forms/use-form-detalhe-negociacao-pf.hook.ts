// src/hooks/modals/forms/use-form-detalhe-negocio-pf.hook.ts
"use client";

import { useState, useEffect } from "react";
import { buscarNegociacaoPfAction } from "@/actions/ativos/negociacoes/buscar/buscar-negoicacao-pf.action";
import { atualizarNegociacaoPfAction } from "@/actions/ativos/negociacoes/atualizar/atualizar-negociacao-pf.action";

export function useFormDetalheNegocioPf(
  negocioId: string | null,
  onSuccess: () => void
) {
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState<number>(0);
  const [status, setStatus] = useState("");

  useEffect(() => {
    async function carregarDados() {
      if (!negocioId) return;
      setCarregando(true);

      const negocio = await buscarNegociacaoPfAction(negocioId);

      if (negocio) {
        setTitulo(negocio.titulo || "");
        setValor(negocio.valor || 0);
        setStatus(negocio.status || negocio.statusId || "");
      }

      setCarregando(false);
    }

    carregarDados();
  }, [negocioId]);

  const handleSalvar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!negocioId) return;

    setSalvando(true);

    try {
      await atualizarNegociacaoPfAction({
        id: negocioId,
        titulo,
        valor,
        status,
      });

      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar o negócio PF.");
    } finally {
      setSalvando(false);
    }
  };

  return {
    carregando,
    salvando,
    titulo, setTitulo,
    valor, setValor,
    status, setStatus,
    handleSalvar,
  };
}