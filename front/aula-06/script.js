var form = document.getElementById('form');
var nome = document.getElementById('nome');
var erroNome = document.getElementById('erro-nome');
var email = document.getElementById('email');
var erroEmail = document.getElementById('erro-email');
var senha = document.getElementById('senha');
var erroSenha = document.getElementById('erro-senha');
var confirmarSenha = document.getElementById('confirma-senha');
var erroConfirmarSenha = document.getElementById('erro-confirma-senha');
var cpf = document.getElementById('cpf');
var erroCpf = document.getElementById('erro-cpf');
var telefone = document.getElementById('telefone');
var erroTelefone = document.getElementById('erro-telefone');
var dataNascimento = document.getElementById('data-nascimento');
var erroDataNascimento = document.getElementById('erro-data-nascimento');
var cep = document.getElementById('cep');
var erroCep = document.getElementById('erro-cep');
var valor = document.getElementById('valor');
var erroValor = document.getElementById('erro-valor');
var url = document.getElementById('url');
var erroUrl = document.getElementById('erro-url');
var cartaoCredito = document.getElementById('cartao');
var erroCartaoCredito = document.getElementById('erro-cartao');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    /*NOME*/
    var valornome = nome.value.trim();
    var regexnome = /^[a-zA-Z\s]+$/;
    if (valornome === "") {
        document.getElementById('erro-nome').textContent = "O campo nome é obrigatório.";
    } else if (!regexnome.test(valornome)) {
        document.getElementById('erro-nome').textContent = "O campo nome deve conter apenas letras e espaços.";
    } else if (valornome.length < 3) {
        document.getElementById('erro-nome').textContent = "O campo nome deve conter pelo menos 3 caracteres.";
    } else if (valornome.length > 42) {
        document.getElementById('erro-nome').textContent = "O campo nome deve conter no máximo 42 caracteres.";
    } else {
        document.getElementById('resultado').innerHTML = "Nome válido!" + "<br>" + valornome;
    }
    /*EMAIL*/
    var valorEmail = email.value.trim();
    var regexEmail = /^\S+@\S+\.com$/;
    if (valorEmail === "") {
        document.getElementById('erro-email').textContent = "O campo email é obrigatório.";
    } else if (!regexEmail.test(valorEmail)) {
        document.getElementById('erro-email').textContent = "O campo email deve conter um endereço de email válido.";
    } else {
        document.getElementById('resultado').innerHTML += "<br>" + "Email válido!" + "<br>" + valorEmail;
    }
    /*SENHA*/
    var valorSenha = senha.value.trim();
    var regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).+$/;
    if (valorSenha === "") {
        document.getElementById('erro-senha').textContent = "O campo senha é obrigatório.";
    } else if (valorSenha.length < 8) {
        document.getElementById('erro-senha').textContent = "A senha deve ter no mínimo 8 caracteres";
    } else if (!regexSenha.test(valorSenha)) {
        document.getElementById('erro-senha').textContent = "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais";
    } else if (valorSenha !== confirmarSenha.value.trim()) {
        document.getElementById('erro-senha').textContent = "As senhas não coincidem.";
    }
    else {
        document.getElementById('resultado').innerHTML += "<br>" + "Senha válida!" + "<br>" + valorSenha;
    }
    /*CPF*/
    var valorCpf = cpf.value.trim();
    var regexCpf = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;


    if (valorCpf === "") {
        erroCpf.textContent = "O campo CPF é obrigatório.";
    } else if (!regexCpf.test(valorCpf)) {
        erroCpf.textContent = "O CPF deve estar no formato 000.000.000-00.";
    } else {
        var cpfNumeros = valorCpf.replace(/\D/g, '');

        if (/^(\d)\1{10}$/.test(cpfNumeros)) {
            erroCpf.textContent = "CPF inválido.";
        } else {
            var soma = 0;
            for (var i = 0; i < 9; i++) {
                soma += parseInt(cpfNumeros.charAt(i)) * (10 - i);
            }
            var resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;

            if (resto !== parseInt(cpfNumeros.charAt(9))) {
                erroCpf.textContent = "CPF inválido.";
            } else {
                soma = 0;
                for (var i = 0; i < 10; i++) {
                    soma += parseInt(cpfNumeros.charAt(i)) * (11 - i);
                }
                resto = (soma * 10) % 11;
                if (resto === 10 || resto === 11) resto = 0;

                if (resto !== parseInt(cpfNumeros.charAt(10))) {
                    erroCpf.textContent = "CPF inválido.";
                } else {
                    document.getElementById('resultado').innerHTML += "<br>CPF válido!<br>" + valorCpf;
                }
            }
        }
    }
    /*TELEFONE*/
    var valorTelefone = telefone.value.trim();
    var regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;

    if (valorTelefone === "") {
        erroTelefone.textContent = "O campo telefone é obrigatório.";
    } else if (!regexTelefone.test(valorTelefone)) {
        erroTelefone.textContent = "O telefone deve estar no formato (11) 99999-9999 ou (11) 9999-9999.";
    } else {
        document.getElementById('resultado').innerHTML += "<br>Telefone válido!<br>" + valorTelefone;
    }
    /*CEP*/
    var valorCep = cep.value.trim();
    var regexCep = /^\d{5}-\d{3}$/;

    if (valorCep === "") {
        erroCep.textContent = "O campo CEP é obrigatório.";
    } else if (!regexCep.test(valorCep)) {
        erroCep.textContent = "O CEP deve estar no formato 00000-000.";
    } else {
        document.getElementById('resultado').innerHTML += "<br>CEP válido!<br>" + valorCep;
    }
    /*DATA DE NASCIMENTO*/
    var valorData = dataNascimento.value.trim();

    if (valorData === "") {
        erroDataNascimento.textContent = "O campo data de nascimento é obrigatório.";
    } else {
        document.getElementById('resultado').innerHTML += "<br>Data válida!<br>" + valorData;
    }
    /*VALOR*/
    var valorInput = valor.value.trim();
    var regexValor = /^\d{1,3}(\.\d{3})*,\d{2}$/;
    var minValor = 1;
    var maxValor = 10000;

    if (valorInput === "") {
        erroValor.textContent = "O campo valor é obrigatório.";
    } else if (!regexValor.test(valorInput)) {
        erroValor.textContent = "O valor deve estar no formato 1.299,90.";
    } else {
        var valorNumerico = parseFloat(valorInput.replace(/\./g, '').replace(',', '.'));

        if (valorNumerico < minValor || valorNumerico > maxValor) {
            erroValor.textContent = "O valor deve estar entre " + minValor + " e " + maxValor + ".";
        } else {
            document.getElementById('resultado').innerHTML += "<br>Valor válido!<br>" + valorInput;
        }
    }
    /*URL*/
    var valorUrl = url.value.trim();
    var regexUrl = /^https?:\/\/.+/;

    if (valorUrl === "") {
        erroUrl.textContent = "O campo URL é obrigatório.";
    } else if (!regexUrl.test(valorUrl)) {
        erroUrl.textContent = "A URL deve começar com http:// ou https://";
    } else {
        document.getElementById('resultado').innerHTML += "<br>URL válida!<br>" + valorUrl;
    }
    /*CARTÃO DE CRÉDITO*/
    var valorCartao = cartaoCredito.value.trim();
    var regexCartao = /^\d{16}$/;

    if (valorCartao === "") {
        erroCartaoCredito.textContent = "O campo cartão de crédito é obrigatório.";
    } else if (!regexCartao.test(valorCartao)) {
        erroCartaoCredito.textContent = "O cartão deve conter 16 dígitos numéricos.";
    } else {
        var bandeira = "";

        if (/^4/.test(valorCartao)) {
            bandeira = "Visa";
        } else if (/^5[1-5]/.test(valorCartao)) {
            bandeira = "Mastercard";
        } else if (/^3[47]/.test(valorCartao)) {
            bandeira = "American Express";
        } else if (/^6(?:011|5)/.test(valorCartao)) {
            bandeira = "Discover";
        } else {
            bandeira = "Bandeira desconhecida";
        }

        document.getElementById('resultado').innerHTML += "<br>Cartão válido!<br>" + valorCartao + "<br>Bandeira: " + bandeira;
    }
})