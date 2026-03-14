//variables
let botonAnyadir=document.getElementById("botonAnyadir")
let panel=document.getElementById("panel")
let nombre=document.getElementById("nombre")
let solucion=document.getElementById("solucion")
let botonResuelve=document.getElementById("botonResuelve")

let amigos= new Set()
let solucionClientes = new Map()

// funcion anonima
const unoMas= function (nombre){
    amigos.add(nombre)
}

// funcion flecha
const otroMas= (nombre) => {
    amigos.add(nombre)
}
unoMas("Laura")
otroMas("Lola")

// //funciones
// function render(){
//     console.log("AMIGOS: "+amigos)
//     //console.log("CLIENTES: "+clientes)
//     panel.innerHTML=""
//     amigos.forEach((amigo)=>
//         console.log(amigo)
//         panel.innerHTML+=`<input type='button' value='Borrar' data-id='${amigo}'>`+amigo+"<BR>"
//     })
// }

//funciones
function render(){
    console.log("AMIGOS: "+ Array.from(amigos))
    const elementos = document.createElement('ul')
    panel.innerHTML="AMIGOS: <br>"
    Array.from(amigos).forEach((amigo)=>{
        console.log(amigo)
        let amigoLi = document.createElement('li')
        let button = document.createElement('input')
        let textoLi = document.createElement('span')
        
        button.type='button'
        button.dataset.id=amigo
        button.value='Borrar'
        textoLi.innerHTML=amigo
        
        amigoLi.append(textoLi)
        amigoLi.append("          ")
        amigoLi.append(button)
        elementos.append(amigoLi)
    })
    panel.append(elementos)
}

//funciones
function renderSolucion(){
    console.log("AMIGOS: "+amigos)
    solucion.innerHTML=""
    //console.log("CLIENTES: "+clientes)
    solucionClientes.forEach((value, key) => {
        solucion.innerHTML+=  `${value} --> ${key}`+"<br>"
    })
}

function borraAmigo(nombre){
    //let indice=amigos.indexOf(nombre)
    //amigos.splice(indice,1)
    amigos.delete(nombre)
    render()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
    devuelve false si el último se asigna a si mismo
*/
function reparto(){
    //copio los amigos    
    let quienRegala= Array.from(amigos).slice()
    let quienRecibe= Array.from(amigos).slice()
    solucionClientes = new Map()
    let esCorrecto=true

    //recorro los amigos que regalan
    for (let i=0; i<quienRegala.length; i++){
        let quienesRegalan = quienRegala[i];

        //fuerzo a que no se regale a sí mismo
        let opciones = quienRecibe.filter(r => r !== quienRegala[i]);

        if (opciones.length === 0) {
         return false;
        }

        // Elijo aleatoriamente a quién le regalo
        let indiceAleatorio = aleatorio(0, opciones.length - 1);
        let quienRecibeElegido = opciones[indiceAleatorio];

        //guardo en un map amigo : cliente
        solucionClientes.set(quienesRegalan, quienRecibeElegido);
        
        //elimino al amigo elegido de la lista de posibles receptores
        let indiceReal = quienRecibe.indexOf(quienRecibeElegido);
        quienRecibe.splice(indiceReal, 1);
    }

    return esCorrecto    
}



//eventos
botonAnyadir.addEventListener("click",(e) => {
    //capturar el formulario
    e.preventDefault()
    amigos.add(nombre.value)
    render()
})


panel.addEventListener("click", (e)=>{
    let nombre=e.target.dataset.id
    console.log("Quieres borrar: "+ nombre)
    borraAmigo(nombre)
})

//no entiendo para qué sirve.
//panel.addEventListener("click",(el)=>{
//    if (el.target.dataset.action=="borrar"){
//        let id=el.target.dataset.action
//        let indice=amigos.indexOf(id)
//        amigos.splice(indice,1)
//        render2()
//    }
//})

botonResuelve.addEventListener("click", (e)=>{
    console.log("Voy a resolver ")
    let correcto=reparto()
    while (!correcto){
        if (!correcto)
            console.log("El mapa no acabo correctamente.")
        correcto=reparto()
    }
    
    // c --> c
    renderSolucion()
})
































































