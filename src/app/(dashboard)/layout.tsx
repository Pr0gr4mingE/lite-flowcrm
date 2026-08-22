"use client";

import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { useLayoutMenu } from "@/shared/hooks/layout/use-layout-menu.hook";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { menuAberto, alternarMenu, fecharMenu } = useLayoutMenu();

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      
      {menuAberto && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
          onClick={fecharMenu}
        />
      )}

      <Sidebar menuAberto={menuAberto} aoFechar={fecharMenu} />
      
      <div className="flex-1 flex flex-col w-full h-full min-w-0">
        <Header aoClicarMenu={alternarMenu} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}