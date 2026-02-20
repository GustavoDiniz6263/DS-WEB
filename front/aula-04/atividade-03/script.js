var contadorItem = 0;

contadorItem ++

function adicionar(){
    contadorItem ++
let novoItem = document.createElement('li');
let nome = document.getElementById('nome').value;
let email = document.getElementById('email').value;
let rm = document.getElementById('RM').value;
let telefone = document.getElementById('telefone').value;
let turma = document.getElementById('turma').value;
novoItem.innerHTML = contadorItem + "<br>" + nome + "<br>" + email + "<br>" + rm + "<br>" + telefone + "<br>" + turma + "<br>";
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