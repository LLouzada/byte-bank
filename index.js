import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//clientes e contas
let numDeContas

const cliente1 = new Cliente("Lucas", 11122233309);
const conta1 = new ContaCorrente(cliente1, 1001);

const cliente2 = new Cliente("Alice", 22244433302);
const conta2 = new ContaCorrente(cliente2, 1002);

//chamadas de métodos
conta1.deposito(200);
conta1.transferir(100, conta2);
conta2.saque(25);

console.log(ContaCorrente.numDeContas);