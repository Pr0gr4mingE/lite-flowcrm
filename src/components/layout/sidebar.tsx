"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { SidebarProps } from "@/shared/types/layout/sidebar.props";
import { MENU_ITEMS } from "@/shared/utils/layout/menu-items.layout";

export function Sidebar({ menuAberto, aoFechar }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-30 w-64 bg-slate-900 flex flex-col text-slate-300 transform transition-transform duration-300 ease-in-out 
      ${menuAberto ? "translate-x-0" : "-translate-x-full"} 
      md:relative md:translate-x-0`}
    >
      <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 shrink-0">
        <h1 className="text-xl font-bold text-white tracking-tight">CRM<span className="text-blue-500">App</span></h1>
        <button onClick={aoFechar} className="md:hidden text-slate-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
        {MENU_ITEMS.map((item) => {
          const Icone = item.icone;
          const ativo = pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <Link
              key={item.nome}
              href={item.href}
              onClick={aoFechar}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                ativo ? "bg-blue-600 text-white font-medium" : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <Icone size={20} className={ativo ? "text-blue-200" : "text-slate-400"} />
              <span className="text-sm">{item.nome}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}