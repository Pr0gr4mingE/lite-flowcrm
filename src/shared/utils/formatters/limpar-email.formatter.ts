/**
 * Remove espaços vazios nas pontas e joga tudo para minúsculo
 */
export const limparEmail = (email: string): string => {
  if (!email) return email;
  return email.toLowerCase().trim();
};