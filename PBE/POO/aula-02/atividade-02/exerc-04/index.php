<?php

abstract class produto{
    public $nome;
    public $preco;
    public $estoque;
    abstract public function calcularDesconto();
}
 
class eletronico extends produto{
    public function calcularDesconto(){
        if ($this->estoque < 5) {
            return ($this->preco - ($this->preco / 10)) - ($this->preco / 10);
        } else {
            return $this->preco - ($this->preco / 10);
    }
}
}
class roupa extends produto{
    public function calcularDesconto(){
        if ($this->estoque < 5) {
            return ($this->preco - ($this->preco / 5)) - ($this->preco / 10);
        } else {
            return $this->preco - ($this->preco / 5);
    }
}
}

echo "Eletrônico: <br/>";
$eletronico = new eletronico();
$eletronico->nome = "Notebook";
$eletronico->preco = 1000;
$eletronico->estoque = 10;
echo "Produto: " . $eletronico->nome . "<br/>";
echo "Preço original: R$ " . $eletronico->preco . "<br/>";
echo "Preço com desconto: R$ " . $eletronico->calcularDesconto() . "<br/>" . "<br/>" . "<br/>";


echo "Roupa: <br/>";
$roupa = new roupa();
$roupa->nome = "Camisa Polo";
$roupa->preco = 100;
$roupa->estoque = 10;
echo "Produto: " . $roupa->nome . "<br/>";
echo "Preço original: R$ " . $roupa->preco . "<br/>";
echo "Preço com desconto: R$ " . $roupa->calcularDesconto() . "<br/>";
    

?>