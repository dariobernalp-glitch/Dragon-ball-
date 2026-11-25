alert("Bienvenido a Dragon Ball: ドラゴンボールの謎");
function elegirGoku(){

    alert("Has elegido a Goku");

}

function elegirVegeta(){

    alert("Has elegido a Vegeta");

}
let fuerza = 100;
let gemas = 0;
let bolasDragon = 0;
function entrenar(){

    fuerza += 10;

    alert("Fuerza: " + fuerza);

}
function oleada(){

    gemas += 50;

    alert("Oleada completada");

}
function cristal(){

    if(bolasDragon == 0){

        alert("Solo puedes salir");

    }

}
