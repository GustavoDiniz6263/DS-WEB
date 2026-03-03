<?php

class documento{

    private $numero;
    public function setNumero($n){
        $this->numero = $n;
    }
    public function getNumero(){
        return $this->numero;
    }

}
class cpf extends Documento {

    public function validar(){

        $cpf = preg_replace('/[^0-9]/', '', $this->getNumero());

        if (strlen($cpf) != 11 || preg_match('/(\d)\1{10}/', $cpf)) {
            return "CPF inválido";
        }

        $number_quantity_to_loop = [9, 10];

        foreach ($number_quantity_to_loop as $item) {

            $sum = 0;
            $number_to_multiplicate = $item + 1;

            for ($index = 0; $index < $item; $index++) {
                $sum += $cpf[$index] * ($number_to_multiplicate--);
            }

            $result = ($sum * 10) % 11;

            if ($result == 10) {
                $result = 0;
            }

            if ($cpf[$item] != $result) {
                return "CPF inválido";
            }
        }

        return "CPF válido";
    }
}

$cpf = new cpf();
$cpf->setNumero("49084719832");
echo $cpf->validar();




?>