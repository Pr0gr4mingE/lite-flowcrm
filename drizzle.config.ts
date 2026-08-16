import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Força o Drizzle Kit a ler as variáveis do seu arquivo local
dotenv.config({ path: ".env.local" });

export default defineConfig({
  // Mapeando explicitamente as duas pastas para não ter erro
  schema: [
    "./src/infrastructure/database/schemas/*.ts",
    "./src/infrastructure/database/relations/*.ts"
  ],
  
  // Atualizando também a pasta de saída das migrations para ficar na infraestrutura
  out: "./src/infrastructure/database/migrations",
  
  dialect: "postgresql",
  
  dbCredentials: {
    // REFACTOR AQUI: Usando a URL direta (porta 5432) para executar as migrações com segurança
    url: process.env.DIRECT_URL as string,
  },
  
  verbose: true,
  strict: true,
});