
// Usamos o Generics <T> para que o campo 'dados' possa ser qualquer entidade
export interface IRespostaDTO<T = string | number | Date | null> {
  sucesso: boolean;
  mensagem: string;
  dados?: T; // Opcional, pois em um erro ou exclusão podemos não devolver dados
}