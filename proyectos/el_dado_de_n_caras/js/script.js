function lanzarDado(caras) {
    const resultado = Math.floor(Math.random() * caras) + 1;
    
    console.log("Has lanzado un dado de " + caras + " caras y ha salido: " + resultado);
    
    return resultado;
}

lanzarDado(6);