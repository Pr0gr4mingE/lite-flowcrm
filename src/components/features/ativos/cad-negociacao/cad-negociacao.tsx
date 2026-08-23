// src/features/ativos/cad-negociacao/CadastroNegociacaoFeature.tsx
"use client";

import { useState } from "react";
import { FormNegociacaoPf } from "./forms/form-negociacao-pf";
import { FormNegociacaoPj } from "./forms/form-negociacao-pj";

// 1. Criamos a interface para avisar que ele vai receber um clienteId da página
interface CadastroNegociacaoFeatureProps {
  clienteId: string | null;

}

// 2. Injetamos a prop aqui
export function CadastroNegociacaoFeature({ clienteId }: CadastroNegociacaoFeatureProps) {
  const [tipoNegociacao, setTipoNegociacao] = useState<"PF" | "PJ">("PF");

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded shadow border border-gray-100">
      <div className="border-b p-4 flex justify-between items-center bg-gray-50 rounded-t">
        <h2 className="text-xl font-semibold text-gray-800">
          Nova Negociação
        </h2>
        <div className="flex bg-gray-200 p-1 rounded">
          <button
            onClick={() => setTipoNegociacao("PF")}
            className={`px-4 py-1 rounded text-sm transition-colors ${
              tipoNegociacao === "PF" ? "bg-white shadow font-medium text-green-600" : "text-gray-600 hover:bg-gray-300"
            }`}
          >
            Contato (PF)
          </button>
          <button
            onClick={() => setTipoNegociacao("PJ")}
            className={`px-4 py-1 rounded text-sm transition-colors ${
              tipoNegociacao === "PJ" ? "bg-white shadow font-medium text-green-600" : "text-gray-600 hover:bg-gray-300"
            }`}
          >
            Conta (PJ)
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* 3. Repassamos o ID lá pra baixo, onde os inputs hidden estão esperando! */}
        {tipoNegociacao === "PF" 
          ? <FormNegociacaoPf clienteId={clienteId} /> 
          : <FormNegociacaoPj clienteId={clienteId} />
        }
      </div>
    </div>
  );
}