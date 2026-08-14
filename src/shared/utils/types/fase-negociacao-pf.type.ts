export type FaseNegociacaoPf = 
  | "CAPTURA"      // Topo de funil: Entrou na base (ex: assinou newsletter, criou conta)
  | "ENGAJAMENTO"  // Meio de funil: Interagiu com automações de marketing, clicou em ofertas
  | "CONVERSAO"    // Fundo de funil: A compra rápida aconteceu (Equivalente ao "Fechado")
  | "FIDELIZACAO"  // Pós-venda: Cliente recorrente, alertas automáticos de recompra ativados
  | "DESISTENCIA"; // Abandono (ex: largou o carrinho, deu opt-out, esfriou)