import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/styles/globals.css";

// Usando a fonte Inter (padrão limpo e moderno)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lite Flow CRM",
  description: "O CRM perfeito para vender mais e melhor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      {/* 
        overflow-x-hidden: Previne a quebra do layout horizontal no celular 
        min-h-screen: Garante que o fundo ocupe pelo menos a tela toda
        antialiased: Deixa as fontes mais suaves no Mac/iOS
      */}
      <body className={`${inter.className} min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col`}>
        {children}
      </body>
    </html>
  );
}