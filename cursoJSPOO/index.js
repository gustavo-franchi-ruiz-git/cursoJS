import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Gustavo", 111222333444);

const cliente2 = new Cliente("Carol", 111333222444);


const contaCorrenteGustavo = new ContaCorrente(cliente1, 1001);
contaCorrenteGustavo.depositar(500);


const conta2 = new ContaCorrente(cliente2, 102);

contaCorrenteGustavo.transferir(200, conta2);
console.log(conta2);
console.log(contaCorrenteGustavo);


console.log("Clientes do ByteBank:")
console.log(cliente1);
console.log(cliente2);
console.log("numero de contas correntes no ByteBank: ",ContaCorrente.numeroDeContas)
