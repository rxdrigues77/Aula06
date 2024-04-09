class Conta{
    constructor(){
        this.Saldo = 0;
    }

    get Saldo(){return this.saldo;}
    set Saldo(pSaldo){this.saldo = pSaldo;}

    imprimir(){
        return "Saldo: " + this.saldo;
    }
}
class Corrente extends Conta{
    constructor(pLimite){
        super();
        this.limite = pLimite;
    }
    get Limite(){return this.limite;}
    set Limite(pLimite){this.limite = pLimite;}

    
    imprimir(){
        return super.imprimir() + "\nLimite: " + this.limite;
    }
}

var obj_cc = new Corrente(1000);
obj_cc.saldo = 700;
console.log(obg_cc.imprimir());
