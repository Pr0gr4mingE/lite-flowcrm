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
        <Label htmlFor="email">E-mail profissional</Label>
        <Input id="email" name="email" type="email" placeholder="joao@empresa.com" required disabled={carregando} />
      </div>

      <div>
        <Label htmlFor="password">Criar uma senha</Label>
        <Input id="password" name="password" type="password" placeholder="Mínimo 8 caracteres" required disabled={carregando} />
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={carregando}>
          {carregando ? "Criando conta..." : "Criar conta grátis"}
        </Button>
      </div>

      {/* Exibe o feedback da API caso exista */}
      {mensagem && (
        <p className="text-sm text-center font-medium mt-3 text-slate-700">
          {mensagem}
        </p>
      )}
    </form>
  );
}