// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigosASortear = [];
let numeroParticipantes = 10;

// funcion para agregar texto de ser necesario
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


//agrega el nombre ingresado a la lista 'amigosASortear'
function agregarAmigo() {
    // si el nombre no se encuentra en la lista lo agrega. 
    let amigoAgregado = document.getElementById('amigo').value;
    
    if (amigoAgregado === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    if(amigosASortear.includes(amigoAgregado)){ 
        alert(`El nombre "${amigoAgregado}" ya existe. Por favor, usa otro nombre o diferencialo de alguna forma.`)
    } else { amigosASortear.push(amigoAgregado)}
    actualizarListaAmigos();
    limpiarCaja();
}


// designa un amigo secreto
function sortearAmigo(){
    if (amigosASortear.length !== 0){
        let amigoSorteado = Math.floor(Math.random()* amigosASortear.length);
        let amigoSecreto = amigosASortear[amigoSorteado];
        alert( `Tu amigo secreto es ${amigoSecreto}`);

        actualizarListaDeAmigos(amigoSorteado);
        return;
    }else {
        alert('Ya se sortearon todos los nombres ingresados. Actualice la pagina para jugar de nuevo.');
    }
    
}


 //borra el amigo que se sorteo de la lista
function actualizarListaDeAmigos(amigoSorteado){
    amigosASortear.splice(amigoSorteado,1);
}

// limpia la barra para en donde se ponen los nombres
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

// muestra la lista de amigos
function actualizarListaAmigos() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = ''; // Limpia la lista actual

    amigosASortear.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaElement.appendChild(li);
    });
}

