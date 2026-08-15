import { eq } from "drizzle-orm";
import { db } from "@/infrastructure/database/db";
import { usuariosTable } from "@/infrastructure/database/schemas/usuario.schema";
import { IUsuarioRepository } from "./IUsuario.repository";
import { CriarUsuarioDTO } from "../dto/criar-usuario.dto";
import { Usuario } from "@/shared/types/domain/agentes/IUsuario";
import { CargoUsuario } from "@/shared/utils/types/cargo-usuario.type";

export class UsuarioRepository implements IUsuarioRepository {
  async salvar(dados: CriarUsuarioDTO): Promise<Usuario> {
    const [novoUsuario] = await db
      .insert(usuariosTable)
      .values(dados as typeof usuariosTable.$inferInsert) // <-- Correção aplicada
      .returning();

    return novoUsuario as Usuario;
  }

  // ... restante dos métodos de busca (inalterados)
  async buscarPorId(id: string): Promise<Usuario | null> {
    const [usuario] = await db.select().from(usuariosTable).where(eq(usuariosTable.id, id));
    return (usuario as Usuario) || null;
  }
  async buscarPorCpf(cpf: string): Promise<Usuario | null> {
    const [usuario] = await db.select().from(usuariosTable).where(eq(usuariosTable.cpf, cpf));
    return (usuario as Usuario) || null;
  }
  async buscarPorEmail(email: string): Promise<Usuario | null> {
    const [usuario] = await db.select().from(usuariosTable).where(eq(usuariosTable.email, email));
    return (usuario as Usuario) || null;
  }
  async buscarPorNome(nome: string): Promise<Usuario[]> {
    const usuarios = await db.select().from(usuariosTable).where(eq(usuariosTable.nome, nome));
    return usuarios as Usuario[];
  }
  async buscarPorCargo(cargo: CargoUsuario): Promise<Usuario[]> {
    const usuarios = await db.select().from(usuariosTable).where(eq(usuariosTable.cargo, cargo));
    return usuarios as Usuario[];
  }
}