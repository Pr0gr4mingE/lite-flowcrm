import { FormCadastro } from "@/components/features/auth/form-cadastro";
import Link from "next/link";

export default function CadUsuarioPage() {
  return (
    <>
      {/* Botão de voltar */}
      <div className="mb-6">
        <Link 
          href="/" 
          className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
        >
          &larr; Voltar para o início
        </Link>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
          Crie sua conta
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Comece a organizar suas vendas agora mesmo.
        </p>
      </div>

      <FormCadastro />

      <div className="mt-6 text-center text-sm text-slate-600">
        Já tem uma conta?{" "}
        <Link href="/login" className="font-medium text-blue-600 hover:underline">
          Faça login
        </Link>
      </div>
    </>
  );
}