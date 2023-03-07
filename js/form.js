let botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener('click', function(evento) {

    evento.preventDefault()

    let form = document.querySelector('#form-adiciona')

    obterValoresDeForm(form)

})

function obterValoresDeForm(form){
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
return paciente
}