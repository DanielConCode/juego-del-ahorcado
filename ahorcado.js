var pantalla = document.querySelector(".canvas-ahorcado");

//Funcion que dibujara la horca
function DibujarHorca(errores)
{
    switch(errores)
    {
        case 9:
            DibujarTrazo(225,275,25,275); //Dibujar la base del dibujo del ahorcado 
        break;
        case 8:
            DibujarTrazo(75,275,75,25); //Dibuja el primer tramo al equivocarse 
        break;
        case 7:
            DibujarTrazo(70,25,180,25);
        break;
        case 6:
            DibujarTrazo(175,25,175,50);
        break;        
        case 5:
            //Dibuja el cuarto tramo al equivocarse, este es una circunferencia, la cabeza del ahorcado
            var pincel = pantalla.getContext("2d");
            pincel.strokeStyle = "darkblue";
            pincel.beginPath();
            pincel.arc(175, 75, 25, 0, 2*3.14);
            pincel.stroke(); 
            pincel.closePath();
        break;
        case 4:
            DibujarTrazo(175,100,175,175);
        break;
        case 3:
            DibujarTrazo(175,100,150,140);
        break;
        case 2:
            DibujarTrazo(175,100,200,140);
        break;
        case 1:
            DibujarTrazo(175,170,150,200);
        break;
        case 0:
            DibujarTrazo(175,170,200,200);
            DibujarTexto("red", "Fin del juego!", 250, 150);
            perdiste = true;
            document.querySelector(".boton-rendirse").style.display = "none";
            document.querySelector(".boton-salir").style.display = "inline-block";
            alert("La palabra correcta era: " + palabraSecreta);
        break;
    }

}

//Funcion para dibujar los trazos del ahorcado
function DibujarTrazo(x1, y1, x2, y2)
{
    var pincel = pantalla.getContext("2d");
    pincel.strokeStyle = "darkblue";
    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.moveTo(x1,y1); //Punto inicial 
    pincel.lineTo(x2,y2); //Punto final
    pincel.stroke(); 
    pincel.closePath();
}

//Funcion que dibujara el texto para la canva-ahorcado en el color y posicion que se indique en los parametros 
function DibujarTexto(color, texto, x, y)
{
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = color;
    pincel.font = "58px Shalimar";
    pincel.fillText(texto, x, y,);
}