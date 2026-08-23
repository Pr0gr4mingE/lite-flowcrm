// Mocks PF
export interface MockClientePf {
  id: string;
  email: string;
  cpf: string;
  nome: string;
  telefone: string;
}

export const mockContatos: MockClientePf[] = [
  { id: "c1", nome: "Wile E. Coyote", email: "wile@acme.com", cpf: "000.000.000-00", telefone: "11999999999" },
  { id: "c2", nome: "Papa-Léguas", email: "beepbeep@desert.com", cpf: "111.111.111-11", telefone: "11988888888" },
  { id: "c3", nome: "Tony Stark", email: "tony@stark.com", cpf: "222.222.222-22", telefone: "11977777777" },
  { id: "c4", nome: "Pepper Potts", email: "pepper@stark.com", cpf: "333.333.333-33", telefone: "11966666666" },
  { id: "c5", nome: "Bruce Wayne", email: "bruce@wayne.com", cpf: "444.444.444-44", telefone: "11955555555" },
  { id: "c6", nome: "Lucius Fox", email: "lucius@wayne.com", cpf: "555.555.555-55", telefone: "11944444444" },
];