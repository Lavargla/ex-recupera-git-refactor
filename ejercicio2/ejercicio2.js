function activate(){

    var cadena = document.getElementById("frase").value;
    var array=cadena.split(" ");
    word_handler(array);
    palindromo(cadena);

}

function word_handler(array) {

    var n_palabras=array.length;
    var primera_palabra=array[0];
    var ultima_palabra=array[n_palabras-1];
    document.getElementById("resultado1").innerHTML="Número de palabras: "  +n_palabras+ "<br>Primera palabra: " +primera_palabra + "<br>Ultima palabra: " +ultima_palabra;

}
    
function palindromo(cadena) {

    var cadena1 = cadena.replace(/[\W_]/g, "").toLowerCase();
    var cadena2 = cadena1.split("").reverse().join("");
    
    if (cadena1 === cadena2) {
        document.getElementById("resultado2").innerHTML="Es un palindromo"
    } else {
        document.getElementById("resultado2").innerHTML="No es un palindromo"
    }

}