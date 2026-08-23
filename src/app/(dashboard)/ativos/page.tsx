// src/app/ativos/cadastro/page.tsx
"use client";

import { useState } from "react";
import { CadastroClientesFeature } from "@/components/features/ativos/cad-clientes/cad-cliente";
import { CadastroNegociacaoFeature } from "@/components/features/ativos/cad-negociacao/cad-negociacao";

export default function CadastroAtivosPage() {
  // Estado 1: Guarda o ID se viermos da cascata
  const [clienteIdGerado, setClienteIdGerado] = useState<string | null>(null);
  
  // Estado 2: A nossa chavinha para pular direto pra Negociação
  const [pularCliente, setPularCliente] = useState(false);

  // Lógica: Mostra a negociação se já geramos um ID OU se a chavinha estiver ativada
  const mostrarNegociacao = clienteIdGerado !== null || pularCliente;

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-8">
      
      {/* CABEÇALHO COM A CHAVINHA */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Cadastro de Ativos</h1>
          <p className="text-gray-500 mt-1">Registre um novo cliente ou crie uma negociação.</p>
        </div>
        
        {/* Toggle Switch (A Chavinha) */}
        <div className="flex items-center gap-3 bg-white p-3 rounded-lg border shadow-sm">
          <span className={`text-sm font-medium ${!pularCliente ? 'text-blue-600' : 'text-gray-400'}`}>
            Novo Cliente
          </span>
          
          <button 
            type="button"
            onClick={() => {
              setPularCliente(!pularCliente);
              setClienteIdGerado(null); // Reseta a cascata se o usuário mudar de ideia
            }}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
              pularCliente ? 'bg-green-500' : 'bg-blue-600'
            }`}
          >
            <span 
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                pularCliente ? 'translate-x-6' : 'translate-x-1'
              }`} 
            />
          </button>
          
          <span className={`text-sm font-medium ${pularCliente ? 'text-green-600' : 'text-gray-400'}`}>
            Nova negociação
          </span>
        </div>
      </div>

      {/* RENDERIZAÇÃO CONDICIONAL */}
      {!mostrarNegociacao ? (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-2">
            <span className="flex items-center justify-center bg-blue-600 text-white w-6 h-6 rounded-full text-sm font-bold">1</span>
            <h2 className="text-lg font-medium text-gray-700">Cadastre o Cliente</h2>
          </div>
          
          <CadastroClientesFeature onSucesso={(id) => setClienteIdGerado(id)} />
        </div>
      ) : (
        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-end border-b pb-2">
            <div className="flex items-center gap-2">
              <span className={`flex items-center justify-center text-white w-6 h-6 rounded-full text-sm font-bold ${pularCliente ? 'bg-green-600' : 'bg-blue-600'}`}>
                {pularCliente ? '1' : '2'}
              </span>
              <h2 className="text-lg font-medium text-gray-700">
                {pularCliente ? 'Criar Negociação' : 'Criar Negociação para o Novo Cliente'}
              </h2>
            </div>
            
            {/* Só mostra o botão de voltar se estivermos no fluxo em cascata */}
            {!pularCliente && (
              <button
                onClick={() => setClienteIdGerado(null)}
                className="text-sm text-blue-600 hover:underline"
              >
                ← Voltar e criar outro cliente
              </button>
            )}
          </div>
          
          <CadastroNegociacaoFeature clienteId={pularCliente ? null : clienteIdGerado} />
        </div>
      )}
    </div>
  );
}