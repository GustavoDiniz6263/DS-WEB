
// Função para somar dois números
function somarNumeros(num1,num2){

    return num1 + num2;


}
let resultado =somarNumeros(5,10)
console.log(resultado)

// Criar um objeto de data para a data atual
let dataAtual = new Date()
console.log(dataAtual.toISOString())

// Extrair partes da data
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();
console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`)

// Adicionar 7 dias à data atual
let hoje = new Date();
let diasParaAdicionar = 7;

let novaData = new Date(hoje);
novaData.setDate(novaData.getDate() + diasParaAdicionar);
console.log(novaData.toLocaleDateString());

// Calcular a diferença entre duas datas
let data1 = new Date('2024-01-01');
let data2 = new Date('2024-12-31');

let diferencaMs = data2 - data1;

// Converter a diferença de milissegundos para dias
let diferencaDias = diferencaMs / (1000 * 60 * 60 * 24);
console.log(`diferença: ${diferencaDias} dias.`);

// Manipulação do DOM
document.getElementById("conteudo").innerHTML = '<h1>Olá, mundo!</h1>';

 var valor = document.getElementById("conteudo").innerHTML;
 console.log(valor);


// Manipulação de atributos
 document.getElementById('foto').setAttribute('src','imagem.jpg');
 console.log(document.getElementById('foto').getAttribute('src'));

// Manipulação de estilos
 document.getElementById('conteudo').style.color = 'blue';
 document.getElementById('foto').style.width = '500px';


 function mudaTamanho(){

        document.getElementById('foto').style.width = '1000px';

 }