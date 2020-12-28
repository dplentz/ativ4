var valorinicio, valortotal, taxagar;
function janta() {
        valorinicio = valor.value;
        valorinicio = parseFloat(valorinicio);
        taxagar = valorinicio * 0.1;
        valortotal = taxagar + valorinicio;
        outgarçom.innerHTML = taxagar;
        outtotal.innerHTML = valortotal;
}