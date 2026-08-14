import { StatusTarefa } from "@/shared/utils/types/status-tarefa.type";
import { TipoTarefa } from "@/shared/utils/types/tipo-tarefa.type";
import { TipoTarefaB2b } from "@/shared/utils/types/tipo-tarefa-b2b.type";
import { TipoTarefaB2c } from "@/shared/utils/types/tipo-tarefa-b2c.type";

export interface Tarefa {
  id: string;
  titulo: string;
  tipo: TipoTarefa | TipoTarefaB2b | TipoTarefaB2c;
  usuarioResponsavelId: string;
  clienteId?: string;
  negociacaoId?: string;
  descricao?: string; // Opcional
  status: StatusTarefa;
  dataVencimento: Date;
  dataCriacao: Date;
  dataAtualizacao: Date;
}