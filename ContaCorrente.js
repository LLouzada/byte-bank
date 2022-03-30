import { Cliente } from "./Cliente.js";

export class ContaCorrente{
    //atributos públicos
    static numDeContas = 0; //atributo estatico para toda a classe
    agencia;
    //atributos privados
    _cliente;
    _saldo; // "_" aviso aos outros programadores de que o atributo é privado
    //#saldo = 0; //https://github.com/tc39/proposal-class-fields#private-fields
    

    //acessor
    set cliente(novoValor){
        if(novoValor instanceof Cliente)
        {
            this._cliente = novoValor;
        }
    }

    //acessar o valor do atribudo privado
    get cliente(){
        return this._cliente;
    }

    constructor(cliente, agencia){
        this.cliente = cliente; //uso do acessor dentro do construor
        this.agencia = agencia;
        this._saldo = 0;
        ContaCorrente.numDeContas++;
    }

    get_saldo(){
        return this._saldo;
    }

    saque(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }else{
            console.log("Saldo Insuficiênte");
        }
    }
    
    deposito(valor){
        if(valor <= 0){ //early return (verifica primeiro se esta nas condições corretas para execução)
            console.log("Valor inválido");
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        if(valor > this._saldo)
        {
            console.log("Saldo Insuficiênte!");
            return conta._saldo;
        }
        const valorSacado = this.saque(valor);
        conta.deposito(valorSacado);
    }
}