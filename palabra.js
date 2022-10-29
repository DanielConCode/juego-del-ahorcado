//Funcion que valida la palabra agregada, si esta es aceptable inicia el juego
function AgregarPalabra()
{
    palabraSecreta = document.querySelector("textarea").value;
    if(palabraSecreta == "" || palabraSecreta == " ")
    {
        alert("Por favor, Ingrese una palabra para jugar");
        Limpiar();
    }
    else if(palabraSecreta.includes(" "))
    {
        alert("Por favor, ingrese solamente una palabra");
        Limpiar();
    }
    else if(palabraSecreta.length <= 3 || (palabraSecreta.length > 8))
    {
        alert("Asegurese que la palabra tenga mas de 3 letras y menos que 8 letras");
        Limpiar();
    }
    else if(palabraSecreta.includes(0) || palabraSecreta.includes(1) || palabraSecreta.includes(2)|| palabraSecreta.includes(3)|| palabraSecreta.includes(4)|| palabraSecreta.includes(5) || palabraSecreta.includes(6)|| palabraSecreta.includes(7)|| palabraSecreta.includes(8)|| palabraSecreta.includes(9))
    {
        alert("Asegurese de no ingresar numeros");
        Limpiar();
    }
    else
    {
        palabraSecreta = palabraSecreta.toUpperCase();
        document.querySelector(".div-palabra").style.display = "none";
        document.querySelector(".div-juego").style.display = "block";
        IniciarJuego();
    }
}

//funcion que limpia el textarea si la palabra no es valida
function Limpiar()
{
    document.querySelector("textarea").value = "";
}