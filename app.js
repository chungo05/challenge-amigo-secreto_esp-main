// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
/**
 * El objetivo de este App.js es desarrollar la lógica backend para añadir arrays tipo texto y sortearlos.
 * @author MassimoChung
 */
let arrNombres = [];

function agregarAmigo(){
     if (document.getElementById('amigo').value == "") {
        alert("Por favor, inserte un nombre.")
     } else {
        arrNombres.push(document.getElementById('amigo').value);
        limpiarCaja();
        listaAmigos();
     }
    console.log(arrNombres);
    return
}

function listaAmigos() {
    let lista = document.getElementById('listaAmigos')
    lista.innerHTML = "";

    for (let nombre in arrNombres) {
        let li = document.createElement('li');
        li.innerText = arrNombres[nombre];
        lista.appendChild(li);
    }
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo(){
    if (arrNombres[0] == null) {
        alert("no has ingresado ningún nombre");
        return
    }
    const numAleatorio = Math.floor(Math.random() * arrNombres.length);
    document.getElementById('resultado').innerHTML = (`el amigo sorteado es: ${arrNombres[numAleatorio]}`);
}
