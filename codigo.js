let pantalla = document.getElementById("pantalla")

function Agregar(dato) {
    pantalla.value += dato
    
}

function Limpiar(){
    pantalla.value = " "
}

function Operar(){
    pantalla.value = eval(pantalla.value)
}
aler