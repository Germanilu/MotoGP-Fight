
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
        player1.innerHTML = `<img src="./img/Riders/${character.name}.png" />`
        team1.innerHTML = player1.innerHTML
        //Añado nombre piloto debajo de su imagen
        document.querySelector("#statsp1").innerHTML = character.name;
        // Se bloquea el piloto en la pantalla
        document.querySelector(`#${character.name}`).classList.add("selected") 
        
    }else if(jugadores.length == 1){
        jugadores.push(character)
        let player2 = document.querySelector("#player2");
        player2.innerHTML = `<img src="./img/Riders/${character.name}.png" />`
        team2.innerHTML = player2.innerHTML
        document.querySelector("#statsp2").innerHTML = character.name;
        document.querySelector(`#${character.name}`).classList.add("selected") 
    }else{
        console.log("No se pueden añadir mas pilotos! ") // Enseñar cartel que no se pueden añadir mas pilotos a la lucha
    }
    //IF para que aparezca el boton para continuar a la siguiente pantalla
    if(jugadores.length == 2){
        document.querySelector(".btn-start").style.display = "flex";
    }
    return jugadores
}




//Funcion Lucha
const fight = () => {
    jugadores[0].attack()
    //Modifico el width de la barra de vida cada golpe
    document.querySelector(".vidap1").style.width = `${jugadores[0].hp}px`;
    jugadores[1].attack()
    document.querySelector(".vidap2").style.width = `${jugadores[1].hp}px`;

    if(jugadores[0].hp <= 0 || jugadores[1].hp <= 0){
        //Quito el boton fight y enseño el contenedor del ganador
        document.querySelector("#btn-fight").style.display = "none"
        let displayGanador = document.querySelector(".ganador");
        displayGanador.style.display = "flex"

        if(jugadores[0].hp > 0){
            //para que la barra de vida se ponga en 0
            document.querySelector(".vidap2").style.width = `0px`;
            //Enseño quien es el ganador
            displayGanador.innerHTML = `Gana  ${jugadores[0].name}`
            //Paso en la pantalla 4 la imagen y el nombre del ganador
            document.querySelector("#winner").innerHTML = `<img src="./img/Riders/${jugadores[0].name}.png" />`
            document.querySelector("#winner-name").innerHTML = jugadores[0].name
            
        }else{
            document.querySelector(".vidap1").style.width = `0px`;
            displayGanador.innerHTML = `Gana  ${jugadores[1].name}`
            document.querySelector("#winner").innerHTML = `<img src="./img/Riders/${jugadores[1].name}.png" />`
            document.querySelector("#winner-name").innerHTML = jugadores[1].name
        }
        //Funcion Timeout para cambiar a la ultima pantalla
       setTimeout(() =>{
        changeScreen(4)
       },2000)
    }
 }
 





let team1 = document.querySelector("#p1");
let team2 = document.querySelector("#p2");
let jugadores = [];

