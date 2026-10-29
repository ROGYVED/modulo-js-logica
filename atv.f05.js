const custoDeCompra = 100
let valorPago = 175.50

if(valorPago > custoDeCompra){
    console.log("Valor de troco: R$ " + (valorPago - custoDeCompra).toFixed(2))
} else if(valorPago < custoDeCompra){
    console.log("Falta pagar: R$ " + (custoDeCompra - valorPago).toFixed(2))
} else{
    console.log("Pagamento exato")
}




