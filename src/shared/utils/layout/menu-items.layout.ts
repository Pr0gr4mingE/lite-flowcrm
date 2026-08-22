import { 
  LayoutDashboard, KanbanSquare, Users, Briefcase, 
  CheckSquare, PackagePlus, UserCircle 
} from "lucide-react";

export const MENU_ITEMS = [
  { nome: "Dashboard Kanban", href: "/dashboard", icone: LayoutDashboard },
  { nome: "Pipeline", href: "/pipeline", icone: KanbanSquare },
  { nome: "Negociações", href: "/negociacoes", icone: Briefcase },
  { nome: "Clientes", href: "/clientes", icone: Users },
  { nome: "Tarefas", href: "/tarefas", icone: CheckSquare },
  { nome: "Cadastro de Ativos", href: "/ativos", icone: PackagePlus },
  { nome: "Perfil", href: "/perfil", icone: UserCircle },
];