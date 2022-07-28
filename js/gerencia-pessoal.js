const form = document.getElementById('form')
const nomeCompleto = document.getElementById('nome-completo')
const cpf = document.getElementById('cpf')
const unidadeTrabalho = document.getElementById('unidade-trabalho')
const tempoEmpresa = document.getElementById('tempo-empresa')
const funcaoNaEmpresa = document.getElementById('funcao-na-empresa')
const cargo = document.getElementById('cargo')
const regiaoAtendimento = document.getElementById('regiao-atendimento')
const experiencia = document.getElementById('experiencia')
// const projeto1 = document.getElementById('projeto1')
// const projeto2 = document.getElementById('projeto2')
// const projeto3 = document.getElementById('projeto3')
// const projeto4 = document.getElementById('projeto4')
// const projeto5 = document.getElementById('projeto5')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const nomeCompletoValue = nomeCompleto.value
    const cpfValue = cpf.value
    const unidadeTrabalhoValue = unidadeTrabalho.value
    const tempoEmpresaValue = tempoEmpresa.value
    const funcaoNaEmpresaValue = funcaoNaEmpresa.value
    const cargoValue = cargo.value
    const regiaoAtendimentoValue = regiaoAtendimento.value
    const experienciaValue = experiencia.value

    // verificação
    if (nomeCompletoValue == "") {
        setErro(nomeCompleto, "Preenchimento obrigatório...");
    } else {
        setSucesso(nomeCompleto);
    }

    if (cpfValue == "") {
        setErro(cpf, "Preenchimento obrigatório...");
    } else {
        setSucesso(cpf);
    }

    if (unidadeTrabalhoValue == "") {
        setErro(unidadeTrabalho, "Preenchimento obrigatório...");
    } else {
        setSucesso(unidadeTrabalho);
    }

    if (tempoEmpresaValue == "") {
        setErro(tempoEmpresa, "Preenchimento obrigatório...");
    } else {
        setSucesso(tempoEmpresa);
    }

    if (funcaoNaEmpresaValue == "") {
        setErro(funcaoNaEmpresa, "Preenchimento obrigatório...");
    } else {
        setSucesso(funcaoNaEmpresa);
    }

    if (cargoValue == "") {
        setErro(cargo, "Preenchimento obrigatório...");
    } else {
        setSucesso(cargo);
    }

    if (regiaoAtendimentoValue == "vazio") {
        setErro(regiaoAtendimento, "Seleção de região obrigatória...");
    } else {
        setSucesso(regiaoAtendimento);
    }

    if (experienciaValue == "") {
        setErro(experiencia, "Preenchimento obrigatório...");
    } else {
        setSucesso(experiencia);
    }
}

function setSucesso (input) {
    const controleFormulario = input.parentElement;

    //Adicionando a classe de sucesso
    controleFormulario.className = "controle-formulario sucesso";
}

function setErro (input, mensagem) {
    const controleFormulario = input.parentElement;
    const small = controleFormulario.querySelector('small');

    //Adicionando mensgaemd de erro
    small.innerText = mensagem;

    // Adicionando classe de erro
    controleFormulario.className = "controle-formulario erro";
}