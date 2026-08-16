import { FormLogin } from "@/components/features/auth/form-login";
import Link from "next/link";

export default function LoginPage() {
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
          Bem-vindo de volta
        </h1>
        <p className="text-sm text-slate-500 mt-2">
          Insira suas credenciais para acessar sua conta.
        </p>
      </div>

      <FormLogin />

      <div className="mt-6 text-center text-sm text-slate-600">
        Não tem uma conta?{" "}
        <Link href="/cad-usuario" className="font-medium text-blue-600 hover:underline">
          Crie agora
        </Link>
      </div>
    </>
  );
}