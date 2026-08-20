import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as usuarioSchema from "./schemas/usuario.schema";

// 1. Garantimos que a string de conexão do .env não seja undefined
const connectionString = process.env.DATABASE_URL!;

// 2. Tipagem global para evitar conflitos no TypeScript
const globalForPg = globalThis as unknown as { pool: Pool };

// 3. Padrão Singleton: usa o pool existente se houver, ou cria um novo
const pool = globalForPg.pool || new Pool({ connectionString });

// 4. Salva o pool globalmente apenas em ambiente de desenvolvimento
if (process.env.NODE_ENV !== "production") {
  globalForPg.pool = pool;
}

// Exportamos a instância 'db' tipada
export const db = drizzle(pool, { schema: { ...usuarioSchema } });