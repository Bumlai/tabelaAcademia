let titulo = document.querySelector('.titulo')
titulo.textContent = 'Aparecida Nutricionista'
//--------------------------------------------------------------------------------------------------------

let pacientes = document.querySelectorAll('.paciente')
for(var i = 0; i <= pacientes.length; i ++){
   let paciente =pacientes[i] 


   //recebendo a peso do paciente
   let pesoTd = paciente.querySelector('.info-peso')
   let peso = pesoTd.textContent
   

   //recebendo a altura do paciente
   let alturaTd = paciente.querySelector('.info-altura')
   let altura = alturaTd.textContent


   let imcTd = paciente.querySelector('.info-imc')
   let imc = calcularImc(peso, altura)
   imcTd.textContent = imc
}

function calcularImc (peso, altura){
    let imc = 0
    //calculando o imc do paciente
    imc = peso / (altura * altura)
    //toFixed para ajustar as casas decimais
    return imc.toFixed(2)
}

