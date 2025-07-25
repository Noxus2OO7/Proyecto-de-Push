
const contenedor = document.getElementById("Area")
const input = document.getElementById("input")

let elementos = []

function agregarElement() {
    if (input.value != "") {
        elementos.push(input.value)

        let resultado = ""
        for (let i = 0; i < elementos.length; i++) {
            resultado += "<span>" + elementos[i] + "</span>"

        }
        contenedor.innerHTML = resultado
    }

}