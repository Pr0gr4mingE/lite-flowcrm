import { NextRequest, NextResponse } from "next/server";
import { makeCriarTarefaHandler } from "@/modules/tarefa/factories/criar-tarefa.factory";

export async function POST(req: NextRequest) {
  try {
    const dadosEntrada = await req.json();
    
    const handler = makeCriarTarefaHandler();
    const resposta = await handler.handle(dadosEntrada);

    if (!resposta.sucesso) {
      return NextResponse.json(resposta, { status: 400 });
    }

    return NextResponse.json(resposta, { status: 201 });
  } catch (error) {
    console.error("[API Tarefa] Erro não tratado:", error);
    return NextResponse.json(
      { sucesso: false, mensagem: "Erro interno no servidor." },
      { status: 500 }
    );
  }
}