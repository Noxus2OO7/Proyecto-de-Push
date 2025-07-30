const popButton = document.getElementById ("pop")
const resetButton = document.getElementById ("reset")
let elementos = ["Kiwi", "Pera", "Guanabana", "Pomelo","Piña","Manzana", "Piña"]

const contenedor = document.getElementById ("Area")



function UpdtHTML(){
 let resultHTML= ""
    for (let i = 0; i < elementos.length; i++){
        resultHTML+= "<span>" + elementos[i] + "</span>"
    }
    elementos.pop()
    Area.innerHTML = resultHTML
}

function pop(){
    console.log (elementos)
    UpdtHTML()
}

function reset(){
    elementos = ["Kiwi", "Pera", "Guanabana", "Pomelo","Piña","Manzana", "Piña"]
    console.log (elementos)
    UpdtHTML()
}

UpdtHTML()
resetButton.addEventListener("click", reset);
popButton.addEventListener("click", pop);