/* SCRIPT PARA JUGAR.HTML */

//Arrays que contienen las palabras predeterminadas y letras
var palabras = ["JAVASCRIPT", "ORACLE", "HTML", ];
var letras = [];

//variable errores que contiene el numero de oportunidades antes de perder
var errores = 9;

//Variable que contrendra  la palabra secreta
var palabraSecreta;

//Variable Pantalla que toma como referencia cada canva
var pantallaLetras = document.querySelector(".canvas-letras");

//Funcion que inicia el juego al presionar el boton Empezar Juego
function IniciarJuego()
{
    DibujarHorca(errores);
    EscogerPalabra();
    dibujarLineas();
    document.querySelector(".boton-empezar-juego").style.display = "none";
    document.querySelector(".boton-nuevo-juego").style.display = "inline-block";
    document.querySelector(".boton-rendirse").style.display = "inline-block";

    //evento especifico de entrada desde el teclado, e variable de evento, y funcion de flecha, para iniciarla y que siempre se ejecute sin parametros o nombres
    document.onkeydown = (e) =>
    {
        var letra = e.key.toUpperCase();

        if(verificarTecla(letra) && palabraSecreta.includes(letra))
        {
            for(var i=0; i<palabraSecreta.length; i++)
            {
                if(palabraSecreta[i] == letra)
                {
                    EscribirLetraCorrecta(i);
                }
            }
        } else
        {
            AnadirLetraIncorrecta(letra);
            EscribirLetraIncorrecta(letra, errores);
        }
    }
}

//Funcion para escoger una palabra secreta
function EscogerPalabra()
{
    var palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
}

//Funcion para dibujar las líneas que serán los guiones para nuestra palabra secreta
function dibujarLineas()
{
    pincel = pantallaLetras.getContext("2d");

    var anchura = 600 / palabraSecreta.length;
    
    pincel.strokeStyle = "black";
    pincel.lineWidth = 3;

    for(var i = 0; i < palabraSecreta.length; i++)
    {
        pincel.moveTo(0 + (anchura * i), 60);
        pincel.lineTo(50 + (anchura * i), 60);
    }
    pincel.stroke();
    pincel.closePath();
}

//Funcion para verificar si una tecla fue presionada
function verificarTecla(key) //key, palabra reservada, es el parametro que envia el sistema al presionar una tecla
{
    var estado = false;

    //utilizamos el rango de numeros entre 65 y 90 basado el codigo ASCII, dicho rango de numeros son asignados para las letras del alfabeto
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key))
    {
        letras.push(key);
        console.log(key);
        return estado;
    }
    else
    {
        estado = true;
        console.log(key)
        return estado;
    }
}

// Funcion que escibe la letra correcta en el espacio correspondiente 
function EscribirLetraCorrecta(index)
{
    pincel = pantallaLetras.getContext("2d");

    pincel.font = "bold 64px Shalimar";
    pincel.lineWidth = 6;
    pincel.fillStyle = "black";

    var anchura = 600 / palabraSecreta.length;

    pincel.fillText(palabraSecreta[index], 5+(anchura*index), 40);
}

// Funcion que escribe la letra incorrecta debajo de las lineas de letras correctas 
function EscribirLetraIncorrecta(letra, errorsLeft)
{
    pincel = pantallaLetras.getContext("2d");

    pincel.font = "bold 42px Shalimar";
    pincel.lineWidth = 6;
    pincel.fillStyle = "darkgreen";

    var anchura = 600 / palabraSecreta.length;

    pincel.fillText(letra, (40*(10-errorsLeft)), 100, 40);
}

//Funcion que resta los intentos
function AnadirLetraIncorrecta()
{
    errores = errores - 1;
    console.log(errores);
    DibujarHorca(errores)
}
