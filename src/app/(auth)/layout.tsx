export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Esse é o fundo cinza que centraliza tudo no meio da tela
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4 md:p-8">
      {/* O w-full max-w-md limita a largura da caixa branca */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-sm border border-slate-200 p-6 md:p-8">
        {children}
      </div>
    </div>
  );
}