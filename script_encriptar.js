function encriptar(){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar(){
    var texto = document.querySelector("#input-texto").value;
    var textoCifrado = texto.replace(/ai/g,"a").replace(/enter/g,"e").replace(/imes/g,"i").replace(/ober/g,"o").replace(/ufat/g,"u");
    document.querySelector(".text-input-salida").value = textoCifrado;
    document.querySelector("#input-texto").value;
}
var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

function copiar(){
    var texto = document.querySelector(".text-input-salida").value;
    document.querySelector("#input-texto").value = texto;
}
var boton3 = document.querySelector("#btn-copy");
boton3.onclick = copiar;
