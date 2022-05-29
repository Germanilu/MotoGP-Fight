
//Funcion Random que genera 1 numero de entre 2 que se pasan por parametro.
const random = (a,b) => Math.floor(Math.random()*(b-a)+a);
//Bucle para generar los numeros que quiere el prompt
for(i =0; i< 2 ; i++){
    // console.log(random(numeroInferior,numeroSuperior));
}

// Creo la clase Riders 
class Riders {
    constructor(name,att,def){
        this.name = name;
        this.att = att;
        this.def = def;
        this.hp = 100;  
    }

    attack(){
        this.luck = random(1,10);
        this.att += (this.luck - this.def)
        this.hp -= this.att  
    }
}

//Instanciando los Riders
let rossi = new Riders("rossi",10,3,);
let marquez = new Riders("marquez",10,3);
let bastianini = new Riders("bastianini",10,3);
let martin = new Riders("martin",10,3);
let mir = new Riders("mir",10,3);
let oliveira = new Riders("oliveira",10,3);
let quartararo = new Riders("quartararo",10,3);
let zarco = new Riders("zarco",10,3);
