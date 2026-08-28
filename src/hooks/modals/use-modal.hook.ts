// src/hooks/modals/use-modal.hook.ts
"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

export function useModal() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const modalAtivo = searchParams.get("modal");
  const negocioId = searchParams.get("id");
  const tipoFunil = searchParams.get("tipo") as "PF" | "PJ" | null; // <-- NOVO

  // Adicionamos o tipoFunil como parâmetro opcional
  const abrirModal = (tipoModal: "detalhes" | "tarefa", id: string, tipoFunil?: "PF" | "PJ") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("modal", tipoModal);
    params.set("id", id);
    if (tipoFunil) params.set("tipo", tipoFunil);
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const fecharModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    params.delete("id");
    params.delete("tipo"); // <-- NOVO
    
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return { modalAtivo, negocioId, tipoFunil, abrirModal, fecharModal };
}