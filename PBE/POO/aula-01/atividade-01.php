<?php

class jogador_de_fut {

    public $posicao;
    public $time;
    public $pais;
    public $altura;
    public $pedominante;
    public function correr(){
        return "estou correndo e sou " .$this->posicao;

}
    public function chutar(){
        return "estou chutando com meu pé " .$this->pedominante;

}
    public function defender(){
        return "eu vou conseguir defender esse chute pois eu tenho " .$this->altura ."de altura";

}
}
$neymar = new jogador_de_fut();
$neymar->posicao = "atacante";
echo $neymar->correr();
echo "<br>";
$van_dijk = new jogador_de_fut();
$van_dijk->pedominante = "esquerdo";
echo $van_dijk->chutar();
echo "<br>";
$alisson = new jogador_de_fut();
$alisson->altura = "1,90m ";
echo $alisson->defender();
echo "<br>";

class lapis {

    public $tamanho;
    public $cor;
    public $marca;
    public $espessura;
    public $tipo;
    public function pintar(){
        return "esse lápis pinta com a cor " .$this->cor;

}
    public function escrever(){
        return "estou escrevendo com um lápis do tipo " .$this->tipo;

}
    public function apontar(){
        return "estou apontando um lápis da marca " .$this->marca;

}
}
echo "<br>";
$lapisazul = new lapis();
$lapisazul->cor = "azul";
echo $lapisazul->pintar();
echo "<br>";
$lapisvermelho = new lapis();
$lapisvermelho->tipo = "6B";
echo $lapisvermelho->escrever();
echo "<br>";
$lapisverde = new lapis();
$lapisverde->marca = "Faber Castel";
echo $lapisverde->apontar();
echo "<br>";

class camisa {

    public $tecido;
    public $cor;
    public $tamanho;
    public $marca;
    public $preco;
    public function vestir(){
        return "estou vestindo uma camisa da cor " .$this->cor;

}
    public function lavar(){
        return "estou lavando uma camisa de um tecido de " .$this->tecido;

}
    public function doar(){
        return "estou doando uma camisa do tamanho " .$this->tamanho;

}
}
echo "<br>";
$camisaazul = new camisa();
$camisaazul->cor = "azul";
echo $camisaazul->vestir();
echo "<br>";
$camisavermelha = new camisa();
$camisavermelha->tecido = "poliéster";
echo $camisavermelha->lavar();
echo "<br>";
$camisaverde = new camisa();
$camisaverde->tamanho = "GG";
echo $camisaverde->doar();
echo "<br>";

class livro {

    public $paginas;
    public $genero;
    public $tamanho;
    public $autor;
    public $editora;
    public function ler(){
        return "estou lendo um livro com " .$this->paginas ." paginas";

}
    public function vender(){
        return "estou vendendo um livro do(a) autor(a) " .$this->autor;

}
    public function comprar(){
        return "estou comprando um livro de " .$this->genero;

}
}
echo "<br>";
$livroazul = new livro();
$livroazul->paginas = "200";
echo $livroazul->ler();
echo "<br>";
$livrovermelho = new livro();
$livrovermelho->autor = "Machado de Assis";
echo $livrovermelho->vender();
echo "<br>";
$livroverde = new livro();
$livroverde->genero = "romance";
echo $livroverde->comprar();
echo "<br>";


class planta {

    public $tamanho;
    public $cor;
    public $aroma;
    public $espécie;
    public $região;
    public function plantar(){
        return "estou plantando uma " .$this->espécie;

}
    public function cheirar(){
        return "essa planta tem um aroma " .$this->aroma;

}
    public function comprar(){
        return "estou comprando uma planta da cor " .$this->cor;


}
}
echo "<br>";
$plantagrande = new planta();
$plantagrande->espécie = "margarida";
echo $plantagrande->plantar();
echo "<br>";
$plantacheirosa = new planta();
$plantacheirosa->aroma = "doce";
echo $plantacheirosa->cheirar();
echo "<br>";
$plantaverde = new planta();
$plantaverde->cor = "verde";
echo $plantaverde->comprar();
echo "<br>";
?>

