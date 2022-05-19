function pulsar(){
    var cadena = document.getElementById("frase").value;
    var array=cadena.split(" ");
    funcion1(array);
    funcion2(cadena);
    }
    
function funcion1(array) {
    var n_palabras=array.length;
    var primera_palabra=array[0];
    var ultima_palabra=array[n_palabras-1];
    document.getElementById("resultado1").innerHTML="Número de palabras: "  +n_palabras+ "<br>Primera palabra: " +primera_palabra + "<br>Ultima palabra: " +ultima_palabra;
}
    
function funcion2(cadena) {
    var cadena1 = cadena.replace(/[\W_]/g, "").toLowerCase();
    var cadena2 = cadena1.split("").reverse().join("");
    
    if (cadena1 === cadena2) {
        document.getElementById("resultado2").innerHTML="Es un palindromo"
    } else {
        document.getElementById("resultado2").innerHTML="No es un palindromo"
    }
}