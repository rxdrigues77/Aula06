class Conta{
    constructor(){
        this.Saldo = 0;
    }

    get Saldo(){return this.saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}
}
var obj_conta = new Conta();
console.log(obg_conta.saldo);