<?php

class Pessoa {

    protected $nome;
    protected $idade;

    public function setNome($n){
        $this->nome = $n;
    }

    public function getNome(){
        return $this->nome;
    }

    public function setIdade($i){
        $this->idade = $i;
    }

    public function getIdade(){
        return $this->idade;
    }
}

class Funcionario extends Pessoa {

    protected $salario;

    public function setSalario($s){
        $this->salario = $s;
    }

    public function getSalario(){
        return $this->salario;
    }

    public function calcularBonus(){
        return 0;
    }
}

class Gerente extends Funcionario {

    public function calcularBonus(){
        return $this->salario * 0.20;
    }
}

class Desenvolvedor extends Funcionario {

    public function calcularBonus(){
        return $this->salario * 0.10;
    }
}

$gerente = new Gerente();
$gerente->setNome("Carlos");
$gerente->setIdade(30);
$gerente->setSalario(10000);

echo "Gerente: " . "<br/>";
echo "Nome: " . $gerente->getNome() . "<br/>";
echo "Idade: " . $gerente->getIdade() . "<br/>";
echo "Salário: " . $gerente->getSalario() . "<br/>";
echo "Bônus: " . $gerente->calcularBonus() . "<br/>";

$dev = new Desenvolvedor();
$dev->setNome("Ana");
$dev->setIdade(20);
$dev->setSalario(5000);

echo "Desenvolvedor: " . "<br/>";
echo "Nome: " . $dev->getNome() . "<br/>";
echo "Idade: " . $dev->getIdade() . "<br/>";
echo "Salário: " . $dev->getSalario() . "<br/>";
echo "Bônus: " . $dev->calcularBonus() . "<br/>";

?>