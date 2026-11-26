let x = 50;
let y = 200;

let fuerza = 100;
let gemas = 0;

const player = document.getElementById("player");

document.addEventListener("keydown", function(e){

    if(e.key === "ArrowUp"){
        y -= 10;
    }

    if(e.key === "ArrowDown"){
        y += 10;
    }

    if(e.key === "ArrowLeft"){
        x -= 10;
    }

    if(e.key === "ArrowRight"){
        x += 10;
    }

    player.style.left = x + "px";
    player.style.top = y + "px";

    comprobarObjetos();

});

function comprobarObjetos(){

    // SACO

    if(cercaDe(150,100)){

        fuerza += 10;

        document.getElementById("fuerza").textContent =
        fuerza;

        console.log("Entrenando");
    }

    // TIENDA

    if(cercaDe(650,80)){

        console.log("Tienda abierta");
    }

    // OLEADA

    if(cercaDe(650,350)){

        gemas += 50;

        document.getElementById("gemas").textContent =
        gemas;

        console.log("Oleada completada");
    }

    // CRISTAL

    if(cercaDe(350,220)){

        console.log("Cristal Dragon");
    }

}

function cercaDe(objX,objY){

    return (
        Math.abs(x - objX) < 40 &&
        Math.abs(y - objY) < 40
    );

}
