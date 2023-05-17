const nombre = document.getElementById("inputNombre")
const apellido = document.getElementById("inputApellido")
const mail = document.getElementById("inputMail")
const edad = document.getElementById("inputAge")
const fecha = document.getElementById("inputDate")
const boton = document.getElementById("boton")

reservas = []

function setUsuario() {
        usuarioIngresado.nombre = nombre.value
        usuarioIngresado.apellido = apellido.value
        usuarioIngresado.mail = mail.value
        usuarioIngresado.fecha = fecha.value
        usuarioIngresado.edad = edad.value
        console.log(usuarioIngresado);
        reservas.push(usuarioIngresado)
        console.log(reservas);
}

function capturarData() {
    (nombre.value == "" || apellido.value == "" || edad.value == "" || mail.value == "" || fecha.value == "") ? alert("Rellena todos los campos") : setUsuario()
}

boton.addEventListener("click", capturarData)

let validador = {
    set: function (objeto, propiedad, valor) {
        if (edad.value < 18) {
                alert("Debes ser mayor de edad para crear una reservación")
            } else {
                objeto[propiedad] = valor
                return true
        } 
    }
}


let usuarioIngresado = new Proxy({}, validador)




