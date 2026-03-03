<?php

class Veiculo {

    public $marca;
    public $modelo;
    private $velocidade;

    public function setVelocidade($v){
        $this->velocidade = $v;
    }

    public function getVelocidade(){
        return $this->velocidade;
    }
}

class Carro extends Veiculo {

    public function acelerar(){
        $this->setVelocidade($this->getVelocidade() + 20);
        return "Carro acelerou para " . $this->getVelocidade() . " km/h";
    }
}

class Moto extends Veiculo {

    public function acelerar(){
        $this->setVelocidade($this->getVelocidade() + 30);
        return "Moto acelerou para " . $this->getVelocidade() . " km/h";
    }
}

$carro = new Carro();
$carro->marca = "Chevrolet";
$carro->modelo = "Onix";
$carro->setVelocidade(0);

echo $carro->acelerar() . "<br/>";


$moto = new Moto();
$moto->marca = "Bajaj";
$moto->modelo = "Dominar 400";
$moto->setVelocidade(0);

echo $moto->acelerar() . "<br/>";

?>