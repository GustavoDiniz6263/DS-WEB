<?php

abstract class animal{
    abstract public function fazerSom();
    public function mover(){
        return "anda";
}
}
class sapo extends animal {

    public function fazerSom(){
        return "coaxa";
    }
}

class tartaruga extends animal {

    public function fazerSom(){
        return "grune";
    }
}

class cavalo extends animal {

    public function fazerSom(){
        return "relincha";
    }
    public function mover(){
        return "galopa e " . parent::mover();
    }
}
echo "sapo: <br/>";
$sapo = new sapo();
echo $sapo->fazerSom() . "<br/>";
echo $sapo->mover() . "<br/>";

echo "tartaruga: <br/>";
$tartaruga = new tartaruga();
echo $tartaruga->fazerSom() . "<br/>";
echo $tartaruga->mover() . "<br/>";

echo "cavalo: <br/>";
$cavalo = new cavalo();
echo $cavalo->fazerSom() . "<br/>";
echo $cavalo->mover() . "<br/>";





?>