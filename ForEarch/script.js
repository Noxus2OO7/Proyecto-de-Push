const earch = document.getElementById ("")

const lista = [
 "Danna", "Ari " , "bryan " , "Lucas " , "Nicol "
]

const Area = document.getElementById("Area");
function actualizarHTML (){
    let resultHTML = "";
    lista.forEach((elemento,index) => {
        resultHTML += `<span id="forEach${index}">${elemento}</span>`
    })
    Area.innerHTML = resultHTML;
}

actualizarHTML()

function mifuncionforEach(){
    lista.forEach((value,index)=> {
        const elemento = document.getElementById(`forEach${index}`)
        setTimeout(()=>{
            elemento.classList.add("selected")
        }, 2000 * index)
     setTimeout(()=> {
        elemento.classList.remove("selected")
     }, 2000 * (index + 1))
    })
}