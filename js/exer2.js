var dia; valorhoras; hora;

function calculo(){
    dia = txtdia.value;
    dia = parseInt(dia);
    hora = txthora.value;
    hora = parseInt(hora);
    valorhora = txtvalorhora.value;
    valorhora = parseInt(valorhora);

    salario = dia*hora*valorhora;
    
    outsalario.innerHTML = salario;
}
