import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//clientes e contas

const cliente1 = new Cliente("Lucas", 11122233309, "456");
const conta1 = new ContaCorrente(cliente1, 1001);
/** 
const cliente2 = new Cliente("Alice", 22244433302);
const conta2 = new ContaCorrente(cliente2, 1002);

const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001);
const contaSalario1 = new ContaSalario(cliente1);
*/
//chamadas de métodos de contas
/** 
conta1.depositar(200);
conta1.sacar(100);
contaPoupanca1.sacar(10);
contaSalario1.depositar(100);
contaSalario1.sacar(10);
*/

//funcionarios

const diretor = new Diretor("Caio", 10000, 12345678900);
const gerente = new Gerente("LLouzada", 5000, 12345678901);

//chamadas de métodos de funcionarios

diretor.cadastrarSenha("123123");
gerente.cadastrarSenha("123");

const estaLogadoDir = SistemaAutenticacao.login(diretor, "123123");
const estaLogadoGer = SistemaAutenticacao.login(gerente, "123");
const estaLogadoCli = SistemaAutenticacao.login(conta1, "456");

//testes

console.log(estaLogadoDir, estaLogadoGer, estaLogadoCli);





