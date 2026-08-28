"use client";

import { useModal } from "@/hooks/modals/use-modal.hook";
import { ModalDetalheNegocio } from "./modal-detalhe-negocio"; 
import { ModalNovaTarefa } from "./modal-nova-tarefa";

export function GerenciadorDeModais() {
  const { modalAtivo } = useModal();

  if (!modalAtivo) return null;

  return (
    <>
      {modalAtivo === "detalhes" && <ModalDetalheNegocio />}
      {modalAtivo === "tarefa" && <ModalNovaTarefa />}
    </>
  );
}