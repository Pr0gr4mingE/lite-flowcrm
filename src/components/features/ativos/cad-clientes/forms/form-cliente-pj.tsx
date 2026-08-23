// src/features/ativos/cad-clientes/forms/form-cliente-pj.tsx
"use client";

import { useCadastrarClientePj } from "@/hooks/ativos/cad-clientes/use-cad-cliente-pj.hook";

// 1. Criamos a interface para receber a prop do componente pai
interface FormClientePjProps {
  onSucesso?: (clienteId: string) => void;
}

// 2. Recebemos a prop no componente
export function FormClientePj({ onSucesso }: FormClientePjProps) {
  const { cadastrar, isPending, erro } = useCadastrarClientePj();

  const handleSubmit = async (formData: FormData) => {
    const { sucesso, id } = await cadastrar(formData);
    
    // 3. Verificamos se teve sucesso e se recebemos o ID
    if (sucesso && id) {
      console.log("Empresa PJ criada com Sucesso! ID:", id);
      
      // 4. Chamamos a função onSucesso para avisar a Page e engatar a cascata
      if (onSucesso) {
        onSucesso(id);
      }
    }
  };

  return (
    <form action={handleSubmit} className="space-y-4">
      <input type="hidden" name="isVisitorMode" value="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1 md:col-span-2">
          <label htmlFor="razaoSocial" className="text-sm font-medium text-gray-700">Razão Social *</label>
          <input type="text" id="razaoSocial" name="razaoSocial" required className="border p-2 rounded" placeholder="Ex: Wayne Investimentos S.A." />
        </div>

        <div className="flex flex-col gap-1 md:col-span-2">
          <label htmlFor="nomeFantasia" className="text-sm font-medium text-gray-700">Nome Fantasia *</label>
          <input type="text" id="nomeFantasia" name="nomeFantasia" required className="border p-2 rounded" placeholder="Ex: Wayne Enterprises" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="cnpj" className="text-sm font-medium text-gray-700">CNPJ *</label>
          <input type="text" id="cnpj" name="cnpj" required className="border p-2 rounded" placeholder="00.000.000/0001-00" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="segmento" className="text-sm font-medium text-gray-700">Segmento *</label>
          <select id="segmento" name="segmento" required className="border p-2 rounded bg-white">
            <option value="TECNOLOGIA">Tecnologia</option>
            <option value="FINANCEIRO">Financeiro</option>
            <option value="INDUSTRIA">Indústria</option>
            <option value="SAUDE">Saúde</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="telefone" className="text-sm font-medium text-gray-700">Telefone Corporativo *</label>
          <input type="tel" id="telefone" name="telefone" required className="border p-2 rounded" placeholder="(00) 3000-0000" />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">E-mail Corporativo *</label>
          <input type="email" id="email" name="email" required className="border p-2 rounded" placeholder="contato@empresa.com" />
        </div>
      </div>

      {erro && (
        <div className="p-3 bg-red-50 text-red-600 rounded text-sm border border-red-200">
          {erro}
        </div>
      )}

      <div className="pt-4 flex justify-end">
        <button 
          type="submit" 
          disabled={isPending}
          className="bg-blue-600 text-white px-6 py-2 rounded font-medium hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Criando Empresa..." : "Criar Empresa PJ"}
        </button>
      </div>
    </form>
  );
}