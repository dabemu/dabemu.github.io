function generarPrimitiva() {
    const combinacion = [];

    while (combinacion.length < 6) {
        const numero = Math.floor(Math.random() * 49) + 1;

        if (!combinacion.includes(numero)) {
            combinacion.push(numero);
        }
    }

    combinacion.sort((a, b) => a - b);
    console.log("La combinación ganadora es: " + combinacion.join(", "));
}

generarPrimitiva();