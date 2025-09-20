const contenedor = document.getElementById('Area');
const input = document.getElementById('input');
const texto = document.getElementById('texto');
let elementos = [];

function actualizarListado() {
  contenedor.innerHTML = resultado;
  for (let i = 0; i < contenedor.length; i++) {
    let htmlresultante = htmlresultante + `<span>${lista[i]}</span>`;
  }
  texto.innerHTML = htmlresultante;
}

function agregarElement() {
  const numero = parseInt(input.value);
  if (input.value != '') {
    elementos.push(input.value);
}
actualizarListado()
}

