// ========== Eventos  do Mouse ========== //

var area = document.getElementById("area");

var mensagem = document.getElementById("mensagem");

area.addEventListener("click", function(){
    mensagem.textContent = "Você clicou";
});

area.addEventListener("dblclick", function(){
if (area.style.background === "lightgreen") {
        area.style.background = "white";
    } else {
        area.style.background = "lightgreen";
    }
});

area.addEventListener("mouseenter", function(){
    mensagem.textContent = "Oiiiiiiiiiiiiiiii";
});

area.addEventListener("mouseleave", function(){
    mensagem.textContent = "Tchauuuuuuuuuuuuu";
});

var posicao = document.getElementById("posicao");

area.addEventListener("mousemove", function(event){
posicao.textContent = "X:"+ event.clientX + " Y:"+ event.clientY;
});

area.addEventListener("contextmenu", function(event){
event.preventDefault();
alert("Botão direito clicado!");
});



// ========== Eventos  do Teclado ========== //

document.addEventListener("keydown", function(event){
//console.log("Tecla pressionada: " + event.key);
});

document.addEventListener("keyup", function(event){
//console.log("Tecla liberada: " + event.key);
});

document.addEventListener("keypress", function(event){
//console.log("Caractere digitado: " + event.key);
});

document.addEventListener("keydown", function(event){
// Exibe a tecla pressionada
var campo = document.getElementById("resultado");
campo.textContent = "Tecla pressionada: " + event.key;
// Também mostra no console
console.log("Tecla pressionada: " + event.key);
});

// ========== Eventos  do Formulário ========== //

// ========== Eventos  da Janela ========== //