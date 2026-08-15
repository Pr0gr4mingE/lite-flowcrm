import { NextRequest, NextResponse } from "next/server";
import { makeCriarNegociacaoPfHandler } from "@/modules/negociacao-pf/factories/criar-negociacao-pf.factory";

export async function POST(req: NextRequest) {
  try {
    const dadosEntrada = await req.json();
    
    const handler = makeCriarNegociacaoPfHandler();
    const resposta = await handler.handle(dadosEntrada);

    if (!resposta.sucesso) {
      return NextResponse.json(resposta, { status: 400 });
    }

    return NextResponse.json(resposta, { status: 201 });
  } catch (error) {
    console.error("[API Negociação PF] Erro não tratado:", error);
    return NextResponse.json(
      { sucesso: false, mensagem: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}