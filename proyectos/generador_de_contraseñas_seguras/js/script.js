function generarPassword(longitud) {
  
    if (longitud < 8 || longitud > 50) {
        console.error("La longitud debe estar entre 8 y 50 caracteres.");
        return;
    }

    let caracteres = "abcdefghijklmnopqrstuvwxyz";
    let caracteresMayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let caracteresNumeros = "0123456789";
    let caracteresEspeciales = "!@#$%^&*()_+|~`-={}[]:;'<>?,./";

    function numeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    let password = "";

    const cantNumeros = numeroAleatorio(1, 2); //entre 1 y 2
    for (let i = 0; i < cantNumeros; i++) {
        password += caracteresNumeros[numeroAleatorio(0, caracteresNumeros.length - 1)];
    }

    const cantEspeciales = numeroAleatorio(1, 2);
    for (let i = 0; i < cantEspeciales; i++) {
        password += caracteresEspeciales[numeroAleatorio(0, caracteresEspeciales.length - 1)];
    }

    // 1 mayúscula
    password += caracteresMayusculas[numeroAleatorio(0, caracteresMayusculas.length - 1)];

    // resto con letras minúsculas
    while (password.length < longitud) {
        password += caracteres[numeroAleatorio(0, caracteres.length - 1)];
    }

    // desordenar
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    console.log("Contraseña generada (" + longitud + " caracteres): " + password);
    return password;
}

generarPassword(12);