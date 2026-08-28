// src/hooks/modals/forms/use-form-detalhe-negocio-pj.hook.ts
"use client";

import { useState, useEffect } from "react";
import { buscarNegociacaoPjAction } from "@/actions/ativos/negociacoes/buscar/buscar-negociacao-pj.action";
import { atualizarNegociacaoPjAction } from "@/actions/ativos/negociacoes/atualizar/atualizar-negociacao-pj.action";

export function useFormDetalheNegocioPj(
  negocioId: string | null,
  onSuccess: () => void
) {
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [valor, setValor] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [cnpj, setCnpj] = useState(""); // Exclusivo de PJ

  useEffect(() => {
    async function carregarDados() {
      if (!negocioId) return;
      setCarregando(true);

      const negocio = await buscarNegociacaoPjAction(negocioId);

      if (negocio) {
        setTitulo(negocio.titulo || "");
        setValor(negocio.valor || 0);
        setStatus(negocio.status || negocio.statusId || "");
        setCnpj(negocio.cnpj || "");
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
      await atualizarNegociacaoPjAction({
        id: negocioId,
        titulo,
        valor,
        status,
        cnpj: cnpj || undefined,
      });

      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Erro ao atualizar o negócio PJ.");
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
    cnpj, setCnpj,
    handleSalvar,
  };
}