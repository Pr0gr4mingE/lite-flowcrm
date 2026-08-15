import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as usuarioSchema from "./schemas/usuario.schema";
// No futuro, você pode importar os outros schemas aqui se for usar o db.query.findFirst...

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Exportamos a instância 'db' tipada com os schemas para habilitar queries avançadas
export const db = drizzle(pool, { schema: { ...usuarioSchema } });