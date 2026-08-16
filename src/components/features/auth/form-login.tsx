"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useLogin } from "@/hooks/auth/use-login.hook";

export function FormLogin() {
  const { handleSubmit, carregando, mensagem } = useLogin();

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-4">
      <div>
        <Label htmlFor="email">E-mail</Label>
        <Input 
          id="email" 
          name="email" // Importante para a Action capturar
          type="email" 
          placeholder="seu@email.com" 
          required 
          disabled={carregando}
        />
      </div>

      <div>
        <Label htmlFor="password">Senha</Label>
        <Input 
          id="password" 
          name="password" // Importante para a Action capturar
          type="password" 
          placeholder="••••••••" 
          required 
          disabled={carregando}
        />
        <div className="flex justify-end mt-1.5 md:mt-1">
          <a href="#" className="text-sm font-medium text-blue-600 hover:underline">
            Esqueceu a senha?
          </a>
        </div>
      </div>

      <div className="pt-2">
        <Button type="submit" className="w-full" disabled={carregando}>
          {carregando ? "Entrando..." : "Entrar na plataforma"}
        </Button>
      </div>

      {mensagem && (
        <p className="text-sm text-center font-medium mt-3 text-red-500">
          {mensagem}
        </p>
      )}
    </form>
  );
}