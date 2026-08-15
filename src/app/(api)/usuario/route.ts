import { NextRequest, NextResponse } from "next/server";
import { makeCriarUsuarioHandler } from "@/modules/usuario/factories/criar-usuario.factory";

export async function POST(req: NextRequest) {
  try {
    const dadosEntrada = await req.json(); // No Next.js App Router, o body é extraído assim
    
    const handler = makeCriarUsuarioHandler();
    const resposta = await handler.handle(dadosEntrada);

    if (!resposta.sucesso) {
      return NextResponse.json(resposta, { status: 400 });
    }

    return NextResponse.json(resposta, { status: 201 });
  } catch (error) {
    console.error("[API Usuario] Erro não tratado:", error);
    return NextResponse.json(
      { sucesso: false, mensagem: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}