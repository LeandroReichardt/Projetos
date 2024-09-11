let produto= parseFloat(prompt("Digite o valor do produto :"))

let desconto = parseFloat(prompt("Digite a porcentagem do desconto desse produto :"))

calculo = produto-(desconto/100*produto)

alert("O Valor do desconto é :"+ calculo)

if (calculo>90){
    alert("A compra pode ser dividida em até 3x sem juros")
}