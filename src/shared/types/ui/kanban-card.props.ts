export interface KanbanCardProps {
  id: string; // Simplificado para string, acompanhando o domínio
  titulo: string;
  subtitulo?: string; 
  valorFormatado?: string; 
  corDestaque?: "azul" | "verde" | "cinza" | "vermelho"; 
  aoClicar?: (id: string) => void; 
}