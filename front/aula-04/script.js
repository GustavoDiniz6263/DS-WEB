
var contadorItem = 0;

contadorItem ++

function adicionar(){
    contadorItem ++
let novoItem = document.createElement('li');
let novaTarefa = document.getElementById('novaTarefa').value;
novoItem.textContent = contadorItem + "-" + novaTarefa;
novoItem.setAttribute('id',contadorItem);

let botaoRemover = document.createElement('button');
botaoRemover.textContent = 'Remover';
botaoRemover.setAttribute('onclick', `remover(${contadorItem})`);

novoItem.appendChild(botaoRemover);
document.getElementById('lista').appendChild(novoItem);


}

function remover(ItemLista){
    var item1 = document.getElementById(ItemLista);
    document.getElementById('lista').removeChild(item1);
}