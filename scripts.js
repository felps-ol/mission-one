//variavel
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")





async function converterMoedas() {

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
       return resposta.json()

    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    console.log(dolar)
    console.log(euro)





    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    if (select.value === "$ Dólar Americano") {

        let ValorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = ValorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    }

    if (select.value === "€ Euro") {

        let ValorEmEuros = inputValorEmReais / euro
        inputMoedas.innerHTML = ValorEmEuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })

    }




    textoReal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })


}

// responsável por trocar nome e bandeiras

function trocaDeMoeda() {
    let textoMoedas = document.getElementById("texto-moedas")
    let bandeiraMoedas = document.getElementById("bandeira-moedas")


    if (select.value === "$ Dólar Americano") {
        textoMoedas.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./img/estados-unidos (1) 1.png"

    }

    if (select.value === "€ Euro") {
        textoMoedas.innerHTML = "Euro"
        bandeiraMoedas.src = "./img/euro.png"
    }

    converterMoedas()
}



// eventos

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDeMoeda)
