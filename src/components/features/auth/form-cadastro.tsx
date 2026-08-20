"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCadastro } from "@/hooks/auth/use-cadastro.hook";

export function FormCadastro() {
  // Consumindo o cérebro que criamos no passo 2
  const { handleSubmit, carregando, mensagem } = useCadastro();

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-4">
      <div>
        <Label htmlFor="nome">Nome completo</Label>
        <Input id="nome" name="nome" type="text" placeholder="João da Silva" required disabled={carregando} />
      </div>

      <div>
        <Label htmlFor="cpf">CPF</Label>
        <Input id="cpf" name="cpf" type="text" placeholder="000.000.000-00" required disabled={carregando} />
      </div>

      <div>
        <Label htmlFor="email">E-mail profissional</Label>
        <Input id="email" name="email" type="email" placeholder="joao@empresa.com" required disabled={carregando} />
      </div>

      <div>
        <Label htmlFor="password">Criar uma senha</Label>
        <Input id="password" name="password" type="password" placeholder="Mínimo 8 caracteres" required disabled={carregando} />
      </div>

      <div>
        <Label htmlFor="cargo">Cargo</Label>
        <select 
          id="cargo" 
          name="cargo" 
          required 
          disabled={carregando}
          defaultValue=""
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="" disabled>Selecione seu cargo</option>
          <option value="ADMINISTRADOR">Administrador</option>
          <option value="DIRETOR">Diretor</option>
          <option value="GERENTE_DE_CONTAS">Gerente de Contas</option>
          <option value="VENDEDOR">Vendedor</option>
          <option value="ANALISTA_DE_MARKETING">Analista de Marketing</option>
          <option value="ANALISTA_DE_DADOS">Analista de Dados</option>
          <option value="SUPORTE">Suporte</option>
        </select>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={carregando}>
          {carregando ? "Criando conta..." : "Criar conta grátis"}
        </Button>
      </div>

      {/* Exibe o feedback da API caso exista */}
      {mensagem && (
        <p className={`text-sm text-center font-medium mt-3 ${mensagem.includes("sucesso") ? "text-green-600" : "text-red-500"}`}>
          {mensagem}
        </p>
      )}
    </form>
  );
}