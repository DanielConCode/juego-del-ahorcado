/* DISENO DE JUGAR.HTML */

//Variable Pantalla que toma como referencia la canva
var pantalla = document.querySelector("canvas");

//variable Pincel para dibujar en la canva
var pincel = pantalla.getContext("2d");

//STROKE dibuja el tramo trazado, con StrokeStyle definimos el color del trazo
pincel.strokeStyle = "darkblue";

//Dibujar la base del dibujo del ahorcado 
DibujarTrazo(225,275,25,275);

//Dibuja el primer tramo al equivocarse 
DibujarTrazo(75,275,75,25);

//Dibuja el segundo tramo al equivocarse 
DibujarTrazo(70,25,180,25);

//Dibuja el tercer tramo al equivocarse 
DibujarTrazo(175,25,175,50);

//Dibuja el tercer tramo al equivocarse 
DibujarTrazo(175,25,175,50);

//Dibuja el cuarto tramo al equivocarse, este es una circunferencia, la cabeza del ahorcado
pincel.beginPath();
pincel.arc(175, 75, 25, 0, 2*3.14);
pincel.stroke(); 


//Dibuja el quinto tramo al equivocarse 
DibujarTrazo(175,100,175,175);

//Dibuja el sexto tramo al equivocarse 
DibujarTrazo(175,100,150,140);

//Dibuja el septimo tramo al equivocarse 
DibujarTrazo(175,100,200,140);

//Dibuja el octavo tramo al equivocarse 
DibujarTrazo(175,170,150,200);

//Dibuja el noveno tramo al equivocarse 
DibujarTrazo(175,170,200,200);

//Funcion para dibujar los trazos del ahorcado
function DibujarTrazo(x1, y1, x2, y2)
{
    pincel.beginPath();
    pincel.lineWidth = 10;
    pincel.moveTo(x1,y1); //Punto inicial 
    pincel.lineTo(x2,y2); //Punto final
    pincel.stroke(); 
}