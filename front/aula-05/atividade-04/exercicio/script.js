// ========== Eventos  do Mouse ========== //

var area = document.getElementById("area");



var mensagem = document.getElementById("mensagem");

area.addEventListener("click", function(){
    document.getElementById('foto2').removeAttribute('src', 'img2.png');
    document.getElementById('foto2').setAttribute('src', 'img3.jpg');
});

var posicao = document.getElementById("posicao");
var condicao = 0;

document.getElementById('foto0').setAttribute('src','img0.png');

area.addEventListener("mousemove", function(event){
posicao.textContent = "X:"+ event.clientX + " Y:"+ event.clientY;

if (condicao === 0 && event.clientX >= 715 && event.clientX <= 791 && event.clientY >= 310 && event.clientY <= 340) {
    document.getElementById('foto1').setAttribute('src','img1.png');
    condicao = 1;

}

if (condicao === 1 && event.clientY >=345 && event.clientY <=515 && (event.clientX <=714 || event.clientX >= 785)) {
    document.getElementById('foto0').removeAttribute('src', 'img0.png');
    document.getElementById('foto1').removeAttribute('src', 'img1.png');
    document.getElementById('foto2').removeAttribute('src', 'img2.png');
    document.getElementById('foto0').setAttribute('src', 'cav.png');
    document.getElementById('foto1').setAttribute('src', 'cav.png');
    document.getElementById('foto2').setAttribute('src', 'cav.png');
    document.getElementById('titulo').innerText = "Você saiu do caminho e perdeu o tesouro!Recarregue a página para tentar novamente!";
    condicao = 2;
}

if (event.clientX >= 715 && event.clientX <= 791 && event.clientY >= 488 && event.clientY <= 520 && condicao === 1) {
    document.getElementById('foto2').setAttribute('src','img2.png');
    document.getElementById('titulo').innerText = "Você encontrou o tesouro! Clique no baú para abrir!";
    document.getElementById('titulo').innerHTML.style.color = "green";
    condicao = 3;
}
});



 

