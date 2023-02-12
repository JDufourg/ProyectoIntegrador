const hexadecimal = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

function aleatorio(inferior,superior){
    let numPosibilidades = superior - inferior;
    let aleat = Math.random() * numPosibilidades;
    aleat = Math.floor(aleat);
    return parseInt(inferior) + aleat;
 };

function generar_color_aleatorio(){
    let color_aleatorio = "#";
    for (i=0;i<6;i++){
        //falta definir la funcion aleatorio
       let posarray = aleatorio(0,hexadecimal.length);
       color_aleatorio += hexadecimal[posarray];
    }
    return color_aleatorio;
 };

//boton cambiar de color de fondo a uno aleatorio.
document.getElementById("botonColorDeFondo").addEventListener("click", function(){
    document.getElementById("contenidoCv").style.backgroundColor = generar_color_aleatorio();
    console.log("cambiamos de color el fondo");
});



