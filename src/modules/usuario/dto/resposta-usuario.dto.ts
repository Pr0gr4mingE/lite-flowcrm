import { IRespostaDTO } from "@/shared/utils/dto/resposta-padrao.dto";
import { Usuario } from "@/shared/types/domain/agentes/IUsuario";

export type RespostaUsuarioDTO = IRespostaDTO<Omit<Usuario, "senha">>;