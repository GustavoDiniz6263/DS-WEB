<?php

class pessoas {

    public $nome;
    public function falar(){
        return "o meu nome é" .$this->nome;

}
}


$bruno = new pessoa()
$bruno->nome = "Bruno Attina";
echo $bruno->falar();


?>

