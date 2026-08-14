import { defineConfig } from "drizzle-kit";

export default defineConfig({
  // Aqui diremos onde vão ficar os nossos arquivos de schema
  schema: "./src/infrastructure/database/schemas/*", 
  
  // A pasta onde ele vai guardar os históricos de migrations
  out: "./src/infrastructure/database/migrations",
  
  // O banco que estamos usando
  dialect: "postgresql",
  
  // A URL de conexão com o banco (puxada do seu .env)
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  
  // Deixa os logs mais limpos no terminal
  verbose: true,
  strict: true,
});