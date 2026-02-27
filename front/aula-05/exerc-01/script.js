// ========== Eventos  do Mouse ========== //

var area = document.getElementById("area");





var posicao = document.getElementById("posicao");
var condicao = 0;

document.getElementById('foto0').setAttribute('src','img0.png');

area.addEventListener("mousemove", function(event){
posicao.textContent = "X:"+ event.clientX + " Y:"+ event.clientY;
if (event.clientX >= 715 && event.clientX <= 791 && event.clientY >= 300 && event.clientY <= 340) {
    document.getElementById('foto1').setAttribute('src','img1.png');
    condicao = 1;

}
if (event.clientX >= 715 && event.clientX <= 791 && event.clientY >= 488 && event.clientY <= 520 && condicao === 1) {
    document.getElementById('foto2').setAttribute('src','img2.png');
    document.getElementById('titulo').innerText = "Parabéns! Você encontrou o tesouro!";
}
});



 

