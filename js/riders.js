

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
        this.luck = random(1,10);
    }

    attack(){
        this.att += this.luck
    }
}


//Instanciando los Riders
let rossi = new Riders("Rossi",10,10);
let marquez = new Riders("Marquez",10,10);
let bastianini = new Riders("Bastianini",10,10);
let martin = new Riders("Martin",10,10);
let mir = new Riders("Mir",10,10);
let oliveira = new Riders("Oliveira",10,10);
let quartararo = new Riders("Quartararo",10,10);
let zarco = new Riders("Zarco",10,10);


//Creando un objeto con todos los riders
let allRiders = {
    1: rossi,
    2: marquez,
    3: bastianini,
    4: martin,
    5: mir,
    6: oliveira,
    7: quartararo,
    8: zarco,
}

console.log(allRiders) 



