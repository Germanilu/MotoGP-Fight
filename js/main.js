//Variables 
let team1 = document.querySelector("#p1");
let team2 = document.querySelector("#p2");
let jugadores = [];

//Funcion Cambio de pantalla
const changeScreen = (numScreen) => {
    let fasewant = "section" + numScreen; // Concateno la palabra section con el numero de pantalla
    let arrFases = ["section1", "section2","section3","section4"]; //Creo el array con las 3 pantallas
    arrFases = arrFases.filter(val => !fasewant.includes(val)); //con .filter elimino del array la pantalla donde estoy y me quedaran solo las otras
    document.getElementById(fasewant).style.display = "block"; // Enseño la pantalla elegida con display block
    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none"; //Recorro el array y les doy a todas las pantallas (menos la pantalla donde estoy ) un display none
    }
}

//Funcion para añadir el piloto al array
const add = (character) => {
    if(jugadores.length == 0){
        jugadores.push(character);
        //Creo variable player 1 para añadir la imagen en el screen 2 y sucesivamente pasarla al screen 3
        let player1 = document.querySelector("#player1");
        player1.innerHTML = `<img src="./img/Riders/${character.name}.png"/>`;
        team1.innerHTML = player1.innerHTML;
        //Añado nombre piloto debajo de su imagen
        document.querySelector("#statsp1").innerHTML = character.name;
        // Se bloquea el piloto en la pantalla
        document.querySelector(`#${character.name}`).classList.add("selected");
        //Desactivo la funcion add() para que no se pueda seleccionar el mismo piloto
        document.querySelector(`#${character.name}`).onclick = "";
        
    }else if(jugadores.length == 1){
        jugadores.push(character);
        let player2 = document.querySelector("#player2");
        player2.innerHTML = `<img src="./img/Riders/${character.name}.png"/>`;
        team2.innerHTML = player2.innerHTML;
        document.querySelector("#statsp2").innerHTML = character.name;
        document.querySelector(`#${character.name}`).classList.add("selected");
    }
    //IF para que aparezca el boton para continuar a la siguiente pantalla
    if(jugadores.length == 2){
        document.querySelector(".btn-start").style.display = "flex";
    }
    return jugadores;
}

//Funcion Lucha
const fight = () => {
    jugadores[0].attack();
    //Modifico el width de la barra de vida cada golpe
    document.querySelector(".vidap1").style.width = `${jugadores[0].hp}px`;
    jugadores[1].attack();
    document.querySelector(".vidap2").style.width = `${jugadores[1].hp}px`;

    //IF para los criticos, si el jugador saca en suerte un 9 el ataque se multiplica
    if(jugadores[0].luck >= 9){
        jugadores[0].att *= 2;
    }else if (jugadores[1].luck >= 9){
        jugadores[1]. att *= 2;
    }

    //Easter Egg, Rossi vs Marquez, ganara siempre Rossi.
    if( ((jugadores[0].name == "rossi") || (jugadores[1].name == "rossi")) && ((jugadores[0].name == "marquez") || (jugadores[1].name == "marquez")) ){
        marquez.att += 20;
    }

    if(jugadores[0].hp <= 0 || jugadores[1].hp <= 0){
        //Quito el boton fight y enseño el contenedor del ganador
        document.querySelector("#btn-fight").style.display = "none";
        let displayGanador = document.querySelector(".ganador");
        displayGanador.style.display = "flex";

        if(jugadores[0].hp > 0){
            //para que la barra de vida se ponga en 0
            document.querySelector(".vidap2").style.width = `0px`;
            //Enseño quien es el ganador
            displayGanador.innerHTML = `The winner is: ${jugadores[0].name}`;
            //Paso en la pantalla 4 la imagen y el nombre del ganador
            document.querySelector("#winner").innerHTML = `<img src="./img/Riders/${jugadores[0].name}.png"/>`;
            document.querySelector("#winner-name").innerHTML = jugadores[0].name;
            
        }else{
            document.querySelector(".vidap1").style.width = `0px`;
            displayGanador.innerHTML = `The winner is:  ${jugadores[1].name}`;
            document.querySelector("#winner").innerHTML = `<img src="./img/Riders/${jugadores[1].name}.png"/>`;
            document.querySelector("#winner-name").innerHTML = jugadores[1].name;
        }
        //Funcion Timeout para cambiar a la ultima pantalla
       setTimeout(() =>{
        changeScreen(4);
       },2000)
    }
 }
 

//Funcion para reiniciar el juego
const reload = () => {
    window.location.reload();
    changeScreen(1);
}




