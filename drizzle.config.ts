import { defineConfig } from "drizzle-kit";

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
    url: process.env.DATABASE_URL as string,
  },
  
  verbose: true,
  strict: true,
});