/**
 * Remove tudo que não for número (Ótimo para CPF, CNPJ e Telefone)
 */
export const apenasNumeros = (valor: string): string => {
  if (!valor) return valor;
  return valor.replace(/\D/g, "");
};