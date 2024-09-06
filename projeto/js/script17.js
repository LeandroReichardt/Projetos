alert("Programa calculo de area geometrica plana : ")

let opcao = (prompt("Digite o numero da figura geometrica: \n1 Triangulo \n2 Quadrado \n3 Triangulo \n4 Cirgulo"))

if(opcao ==1){
    let base= parseInt(prompt("Digite a base : "))
    let altura= parseInt(prompt("Digite a altura : "))
    
    let area= (base*altura)/2
    alert("A area do triangulo é "+ area)
}

else 
    if(opcao == 2){
        let lado = parseInt("Digite o lado :")
        calculo = lado*lado
        alert("A area do quadrado é "+ calculo)
}

else
    if(opcao == 3){
        let base = parseFloat(prompt("Digite o valor da base"))
        let altura = parseFloat(prompt("Digite o valor da altura"))
        let area = base*altura
        alert("A area do retangulo é : "+ area)
    }

else
    if(opcao == 4){
        let raio = parseFloat(prompt("Digite o valor do raio : "))
        let area = 3.14 * raio * raio
        alert(" A area do circulo corresponde a: "+ area)
    }

else{
    alert("Opção não valida")
}