const form = document.getElementById('form')
// const selecaoProjeto = document.getElementById('selecao-projeto')
const selecaoProjeto = document.getElementById('selecao-projeto')
const nomeCompleto = document.getElementById('nome-completo')
const cpf = document.getElementById('cpf')
const unidadeTrabalho = document.getElementById('unidade-trabalho')
const foto = document.getElementById('foto')
const experiencia = document.getElementById('experiencia')
const tipoAtividade = document.getElementById('tipo-atividade')
const nomeAtividade = document.getElementById('nome-atividade')
const dataInicio = document.getElementById('data-inicio')
const dataFim = document.getElementById('data-fim')
const custoTotal = document.getElementById('custo')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {
    const selecaoProjetoValue = selecaoProjeto.value
    const nomeCompletoValue = nomeCompleto.value
    const cpfValue = cpf.value
    const unidadeTrabalhoValue = unidadeTrabalho.value
    const fotoValue = foto.value
    const experienciaValue = experiencia.value
    const tipoAtividadeValue = tipoAtividade.value
    const nomeAtividadeValue = nomeAtividade.value
    const dataInicioValue = dataInicio.value
    const dataFimValue = dataFim.value
    const custoTotalValue = custoTotal.value

    // Verificando se o campo é vazio
    if (selecaoProjetoValue == 'vazio') {
        setErrorProjeto(selecaoProjeto, "A escolha de um projeto é obrigatória...");
    } else {
        setSucessoProjeto(selecaoProjeto);
    }

    if (nomeCompletoValue == "") {
        setErrorFor(nomeCompleto, "Preenchimento obrigatório...");
    } else {
        setSucesso(nomeCompleto);
    }
    
    if (cpfValue == "") {
        setErrorFor(cpf, "Preenchimento obrigatório...");
    } else {
        setSucesso(cpf);
    }

    if (unidadeTrabalhoValue == "") {
        setErrorFor(unidadeTrabalho, "Preenchimento obrigatório...");
    } else {
        setSucesso(unidadeTrabalho);
    }

    if (fotoValue == "") {
        setErrorFor(foto, "É obrigatório selecionar foto...");
    } else {
        setSucesso(foto);
    }

    if (experienciaValue == "") {
        setErrorFor(experiencia, "Preenchimento obrigatório...");
    } else {
        setSucesso(experiencia);
    }

    if (tipoAtividadeValue == "vazio") {
        setErrorFor(tipoAtividade, "Preenchimento obrigatório...");
    } else {
        setSucesso(tipoAtividade);
    }

    if (nomeAtividadeValue == "") {
        setErrorFor(nomeAtividade, "Preenchimento obrigatório...");
    } else {
        setSucesso(nomeAtividade);
    }

    if (dataInicioValue == "") {
        setErrorFor(dataInicio, "Preenchimento obrigatório...");
    } else {
        setSucesso(dataInicio);
    }

    if (dataFimValue == "") {
        setErrorFor(dataFim, "Preenchimento obrigatório...");
    } else {
        setSucesso(dataFim);
    }

    if (custoTotalValue == "") {
        setErrorFor(custoTotal, "Preenchimento obrigatório...");
    } else {
        setSucesso(custoTotal);
    }

}

function setErrorProjeto (input, mensagem) {
    const controleFormulario = input.parentElement;
    const small = controleFormulario.querySelector('small');

    //adicionando mensagem de erro
    small.innerText = mensagem;

    //Adicionando classe de erro
    controleFormulario.className = "controle-formulario-projeto erro";
}

function setSucessoProjeto (input) {
    const controleFormulario = input.parentElement;

    // Adicionando a classe de sucesso
    controleFormulario.className = "controle-formulario-projeto sucesso";
}

function setErrorFor(input, mensagem) {
    const controleFormulario = input.parentElement;
    const small = controleFormulario.querySelector('small');

    //adicionando mensagem de erro
    small.innerText = mensagem;;

    //Adicionando classe de erro
    controleFormulario.className = "controle-formulario erro";

}


function setSucesso(input) {
    const controleFormulario = input.parentElement;

    //Adicionando a classe de sucesso
    controleFormulario.className = "controle-formulario sucesso";
}