import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 
        NAVBAR
        - flex-col no celular para empilhar a logo e os botões se faltar espaço.
        - md:flex-row no desktop para colocar tudo na mesma linha.
      */}
      <header className="px-12 py-8 border-b border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Lite Flow <span className="text-blue-600">CRM</span>
        </div>
      </header>

      <main>
        {/* 
          HERO SECTION
          - py-12 no mobile, py-24 no desktop.
          - text-4xl no mobile, text-5xl/6xl no desktop.
        */}
        <section className="px-6 py-12 md:py-24 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
            O CRM perfeito para <br className="hidden md:block" />
            <span className="text-blue-600">vender mais e melhor.</span>
          </h1>
          <p className="text-base md:text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Organize seus leads, acompanhe seu pipeline e feche negócios mais rápido com uma interface simples e direto ao ponto.
          </p>
          
          {/* Botoes alinhados: flex-col (celular) e sm:flex-row (desktop) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-4 sm:px-0">
            
            {/* 1. Botão de Login */}
            <Link href="/login" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                Fazer Login
              </Button>
            </Link>
            
            {/* 2. Botão de Cadastro (Principal) */}
            <Link href="/cad-usuario" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto">
                Criar conta
              </Button>
            </Link>
            
            {/* 3. Botão de Visitante (Agora apontando para /dashboard) */}
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto text-slate-600">
                Entrar como visitante
              </Button>
            </Link>
            
          </div>
        </section>

        {/* 
          FEATURES GRID
          - grid-cols-1 no celular (empilhado).
          - md:grid-cols-3 no desktop (lado a lado).
        */}
        <section className="bg-slate-50 px-6 py-16 md:py-24">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  🚀
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Pipeline Visual</h3>
                <p className="text-gray-500 text-sm">Arraste e solte seus negócios e saiba exatamente onde cada lead está no processo.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  📱
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Mobile First</h3>
                <p className="text-gray-500 text-sm">Acesse seus clientes e atualize informações de qualquer lugar, direto do celular.</p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                  ⚡
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Direto ao Ponto</h3>
                <p className="text-gray-500 text-sm">Sem dezenas de botões inúteis. Apenas o que você precisa para focar no que importa: vender.</p>
              </div>

            </div>
          </div>
        </section>
      </main>

    </div>
  );
}