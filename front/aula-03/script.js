
var contadorItem = 0;

contadorItem ++

function adicionar(){
    contadorItem ++
let novoItem = document.createElement('li');
novoItem.textContent = contadorItem + "-" + prompt("Digite o nome do item:");
novoItem.setAttribute('id',contadorItem);

let botaoRemover = document.createElement('button');
botaoRemover.textContent = 'Remover';
botaoRemover.setAttribute('onclick', `remover(${contadorItem})`);

document.getElementById('lista').appendChild(novoItem);
}

function remover(){
    var item1 = document.getElementById('item1');
    document.getElementById('lista').removeChild(item1);
}