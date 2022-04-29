import { Cliente } from "../Cliente.js"


//classe abstrata
export class Conta {
    //atributos privados
    //iniciados no construtor
    //_saldo; // "_" aviso aos outros programadores de que o atributo é privado
    //#saldo = 0; //https://github.com/tc39/proposal-class-fields#private-fields

    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar objetos tipo Conta diretamente, pois é uma classe Abstrata");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //acessor
    set cliente(novoValor){
        if(novoValor instanceof Cliente)
        {
            this._cliente = novoValor;
        }else{
            console.log("Cliente Inválido");
        }
    }

    //acessar o valor do atribudo privado
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    //método abstrato (força a sobrescrita)
    sacar(valor){
        throw new Error("O método sacar da Conta é abstrato");
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        
        return 0;
    }
    
    depositar(valor){
        if(valor <= 0){ 
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
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}