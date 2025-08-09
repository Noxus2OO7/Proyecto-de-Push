
const lista = [
    "Kiwi", "Ventilador", "Juan", "Lechuga", "Pechuga", "Danna"
]

const contenedor = document .getElementById("Area");
function actualizarHTML(){
    let resultHTML = "";
    lista.forEach((Area, index) => {
        resultHTML +=`<span id="forEach${index}">${Area}</span>`
    }) 
    contenedor.innerHTML = resultHTML;
}

actualizarHTML()

lista.forEach((value,index)=>{
    console.log("valor"+ value)
    console.log("Indice + index")
    console.log("")
})