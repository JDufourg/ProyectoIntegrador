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

 function moverseA(idDelElemento) {
    location.hash = "#" + idDelElemento.id;
};

//boton cambiar de color de fondo a uno aleatorio.
document.getElementById("botonColorDeFondo").addEventListener("click", function(){
    document.getElementById("contenidoCv").style.backgroundColor = generar_color_aleatorio();
    console.log("cambiamos de color el fondo");
});

//USO DE TOASTS BOOTSTRAP 5

document.getElementById("botonMeGusta").addEventListener("click", function(){
    var myToast = bootstrap.Toast.getOrCreateInstance(meGustaToast);
    myToast.show();
});

document.getElementById("botonNoMeGusta").addEventListener("click", function(){
    var myToast1 = bootstrap.Toast.getOrCreateInstance(noMeGustaToast);
    myToast1.show();
});

document.getElementById("botonEnviarMensaje").addEventListener("click", function(){
    moverseA(scrollspyContactame);
});



