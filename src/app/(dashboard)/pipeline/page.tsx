// src/app/pipeline/page.tsx

import { Metadata } from "next";
import { QuadroKanbanFeature } from "@/components/features/pipeline/kanban-board";

export const metadata: Metadata = {
  title: "Pipeline de Vendas | CRM",
  description: "Gerencie suas negociações e acompanhe o funil de vendas.",
};

export default function PipelinePage() {
  return (
    // A div main garante que a página ocupe o espaço correto e tenha um padding base
    <main className="h-full w-full p-6 bg-white flex flex-col overflow-hidden">
      <QuadroKanbanFeature />
    </main>
  );
}