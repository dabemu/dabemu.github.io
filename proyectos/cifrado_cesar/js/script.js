let frase=document.getElementById("frase")
let numeroLetras=document.getElementById("numeroLetras")
let botonCifrar=document.getElementById("botonCifrar")

let solucion = "" 

function renderSolucion(){
    console.log("Frase cifrada: "+solucion)
    fraseCifrada.innerHTML=""
    fraseCifrada.innerHTML+=solucion
}

function cifradoCesar(texto, clave) {
    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let resultado = "";

    // todo en mayúscula
    texto = texto.toUpperCase();

    for (let i = 0; i < texto.length; i++) {
        const letraActual = texto[i];
        const indiceActual = alfabeto.indexOf(letraActual);

        if (indiceActual === -1) {
            // si no es una letra se queda igual
            resultado += letraActual;
        } else {
            // desplazar y volver al inicio
            let nuevoIndice = (indiceActual + clave) % alfabeto.length;

            // claves negativas
            if (nuevoIndice < 0) {
                nuevoIndice += alfabeto.length;
            }

            resultado += alfabeto[nuevoIndice];
        }
    }

    console.log("Mensaje original: " + texto);
    console.log("Resultado: " + resultado);
    return resultado;
}

botonCifrar.addEventListener("click", (e)=>{
    console.log("Voy a cifrar...")
    solucion = cifradoCesar(frase.value, parseInt(numeroLetras.value))
    renderSolucion()
})