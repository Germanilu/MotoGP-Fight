
//Funcion Cambio de pantalla
const changeScreen = (numScreen) => {
    let fasewant = "section" + numScreen; // Concateno la palabra section con el numero de pantalla
    let arrFases = ["section1", "section2","section3"]; //Creo el array con las 3 pantallas
    arrFases = arrFases.filter(val => !fasewant.includes(val)); //con .filter elimino del array la pantalla donde estoy y me quedaran solo las otras
    document.getElementById(fasewant).style.display = "block"; // Enseño la pantalla elegida con display block
    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none"; //Recorro el array y les doy a todas las pantallas (menos la pantalla donde estoy ) un display none
    }
}




let arr = [];

//Funcion para añadir el piloto al array
const add = (character) => {
    if(arr.length == 0){
        console.log("arr[0]",character.name)
        arr.push(character);
        //Creo variable player 1 para añadir la imagen en el screen 2 y sucesivamente pasarla al screen 3
        let player1 = document.querySelector("#player1");
        player1.innerHTML = `<img src="./img/Riders/${character.name}.png" />`
        team1.innerHTML = player1.innerHTML
        document.querySelector(`#${character.name}`).classList.add("selected") // Se bloquea el piloto en la pantalla
        
    }else if(arr.length == 1){
        console.log("arr[1]",character.name)
        arr.push(character)
        let player2 = document.querySelector("#player2");
        player2.innerHTML = `<img src="./img/Riders/${character.name}.png" />`
        team2.innerHTML = player2.innerHTML
        document.querySelector("#player2").innerHTML = `<img src="./img/Riders/${character.name}.png" />` 
        document.querySelector(`#${character.name}`).classList.add("selected") 
    }else{
        console.log("No se pueden añadir mas pilotos! ") // Enseñar cartel que no se pueden añadir mas pilotos a la lucha
    }
    return arr
}




//Funcion Lucha
const fight = () => {
    arr[0].attack()
    console.log(arr[0])
    arr[1].attack()
    console.log(arr[1])
    
    if(arr[0].hp <= 0){
        console.log(arr[1].name, "ha ganado")
    }else if(arr[1].hp <= 0){
        console.log(arr[1].name, "ha ganado")
    }
 }
 

//document.querySelector("#bastianini").style.display = "none" al seleccionar bastianini me quita la imagen de la seleccion de pilotos



let team1 = document.querySelector("#p1");
let team2 = document.querySelector("#p2");



