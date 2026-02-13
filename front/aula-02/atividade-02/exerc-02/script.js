document.getElementById('foto').setAttribute('src','imagemney.jpg');

function mudafoto1(){

    document.getElementById('foto1').setAttribute('src','img1.jpg');
    document.getElementById('foto').removeAttribute('src','imagemney.jpg');
    document.getElementById('foto2').removeAttribute('src','img2.jpg');
    console.log(document.getElementById('foto1').getAttribute('src'));
}
function mudafoto2(){

    document.getElementById('foto2').setAttribute('src','img2.jpg');
    document.getElementById('foto1').removeAttribute('src','img1.jpg');
    document.getElementById('foto').removeAttribute('src','imagemney.jpg');
     console.log(document.getElementById('foto2').getAttribute('src'));
}