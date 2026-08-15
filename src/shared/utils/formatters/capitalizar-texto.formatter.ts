/**
 * Transforma "joão da SILVA" em "João Da Silva"
 */
export const capitalizarTexto = (texto: string): string => {
  if (!texto) return texto;
  return texto
    .toLowerCase()
    .split(" ")
    .map((palavra) => palavra.charAt(0).toUpperCase() + palavra.slice(1))
    .join(" ")
    .trim();
};