let boton = document.getElementById("boton")
let boton2 = document.getElementById("boton2")
let contador = 0
let resultado = 0
let muestra = document.getElementById("muestra")

function balotas(){
    let select = parseInt(document.getElementById("op").value)
    let input = parseInt(document.getElementById("pal").value)
    let seguir = true
    if(select < 1 || select > 100){
        alert("Por favor selecciona un numero que sea mayor a 1 y menor a 100")
    }
    do{
        let ramdom = 1 + (parseInt(Math.random() * 100))
        if(select==ramdom){
            contador=contador+1
            resultado=resultado+input
            muestra.innerHTML=`<h1 class="ganaste">ganaste un total de: ${resultado} y el numero fue: ${ramdom}</h1>`
        }
        else{
            contador=contador+1
            resultado=resultado-input
            muestra.innerHTML=`<h1 class="perdiste">perdiste un total de: ${resultado} y el numero fue: ${ramdom}</h1>`
        }
        seguir=false
    }
    while(seguir!=false)
}

boton.addEventListener('click',balotas)

function reset(){
    contador = 0
    resultado = 0
    muestra.innerHTML=``
}

boton2.addEventListener('click',reset)