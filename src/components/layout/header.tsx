import { Bell, Search, Menu } from "lucide-react";
import { HeaderProps } from "@/shared/types/layout/header.props";

export function Header({ aoClicarMenu }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 md:px-6 shrink-0">
      <div className="flex items-center gap-4 flex-1">
        <button onClick={aoClicarMenu} className="md:hidden text-slate-500 hover:text-slate-700">
          <Menu size={24} />
        </button>
        
        <div className="flex items-center bg-slate-100 rounded-lg px-3 py-2 w-full max-w-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all hidden sm:flex">
          <Search size={18} className="text-slate-400" />
          <input 
            type="text" 
            placeholder="Buscar no sistema..." 
            className="bg-transparent border-none focus:outline-none ml-2 w-full text-sm text-slate-700 placeholder:text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button className="text-slate-400 hover:text-slate-600 transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-200 shrink-0">
          U
        </div>
      </div>
    </header>
  );
}