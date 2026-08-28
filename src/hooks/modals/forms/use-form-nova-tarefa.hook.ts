"use client";

import { useState } from "react";
import { criarTarefaAction } from "@/actions/ativos/tarefa/criar-tarefa.action";
import { TipoTarefaB2b } from "@/shared/utils/types/tipo-tarefa-b2b.type";
import { TipoTarefaB2c } from "@/shared/utils/types/tipo-tarefa-b2c.type";
import { TipoTarefa } from "@/shared/utils/types/tipo-tarefa.type";
import { StatusTarefa } from "@/shared/utils/types/status-tarefa.type";

type TodosTiposTarefa = TipoTarefa | TipoTarefaB2b | TipoTarefaB2c;

export function useFormNovaTarefa(negocioId: string | null, onSuccess: () => void) {
  const [salvando, setSalvando] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [tipo, setTipo] = useState<TodosTiposTarefa>("LIGACAO");
  const [status, setStatus] = useState<StatusTarefa>("PENDENTE");
  const [dataVencimento, setDataVencimento] = useState("");
  const [descricao, setDescricao] = useState("");

  const handleSalvarTarefa = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!negocioId) return;

    setSalvando(true);
    const novaTarefa = {
      negocioId,
      titulo,
      tipo,
      status,
      dataVencimento: new Date(dataVencimento),
      descricao: descricao || undefined,
    };

    try {
      await criarTarefaAction(novaTarefa);
      onSuccess();
    } catch (error) {
      console.error(error);
      alert("Erro ao criar tarefa");
    } finally {
      setSalvando(false);
    }
  };

  return {
    titulo, setTitulo,
    tipo, setTipo,
    status, setStatus,
    dataVencimento, setDataVencimento,
    descricao, setDescricao,
    salvando,
    handleSalvarTarefa
  };
}