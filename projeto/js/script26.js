let numero =parseInt(prompt("Digite um valor"))
for(let hora= 24; hora <0; hora--){
    for(let minuto = 60; minuto <0; minuto--){
        for(let segundo = 60; segundo <0; segundo--){
            console.log(hora+ " : "+ minuto+" : "+ segundo)
        }
    }
}