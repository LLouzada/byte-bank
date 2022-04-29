import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    //atributos públicos
    static numDeContas = 0; //atributo estatico para toda a classe
     
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numDeContas++;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor, taxa); //posso usar tando o super._sacar quanto o this._sacar
    }
}