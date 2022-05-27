
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
    arr.push(character);
    return arr
    //document.querySelector("#bastianini").style.display = "none" al seleccionar bastianini me quita la imagen de la seleccion de pilotos
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





