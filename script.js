const calculationButton = document.querySelector("#operation-button")
const currencySelectToConvert = document.getElementById("select-two")
const iconDolar = document.getElementById("icon-dolar")
// const valueEntered = document.getElementById("value-to-convert")


const dolarToday = 5.81
const euroToday = 6.10
const libraToday = 7.30
const bitcoinToday = 534369.25




function convertValues(){
    const valueEntered = document.getElementById("value-to-convert").value
    const currencyValueToConvert = document.getElementById("value-for-conversion")
    const currencyValueConverted = document.getElementById("converted-value")

    // const currencyConversionDolar = valueEntered / dolarToday
    // const currencyConversionEuro  = valueEntered / euroToday
 
    currencyValueToConvert.innerText = new Intl.NumberFormat("pt-BR", {style:"currency", currency:"BRL"}).format(valueEntered)

    if (currencySelectToConvert.value == "dolar"){
        currencyValueConverted.innerText = new Intl.NumberFormat("en-US", {style:"currency", currency:"USD"}).format(valueEntered / dolarToday) //quando o select for "dolar..."
    }

    if (currencySelectToConvert.value == "euro"){
        currencyValueConverted.innerText = new Intl.NumberFormat("en-UK", {style:"currency", currency:"EUR"}).format(valueEntered / euroToday) //quando o select for "euro"
    }

    if(currencySelectToConvert == "euro"){iconDolar.innerHTML.src = "./assets.euro.png"}

    if(currencySelectToConvert == "dolar"){iconDolar.innerHTML.src="./assets.dolar.png"}

    // if (currencySelectToConvert.value == "libra"){}

console.log(currencySelectToConvert.value)

} 


function toctoc(){
console.log("agr conectou")
}
currencySelectToConvert.addEventListener("change",convertValues)
calculationButton.addEventListener("click",convertValues)
// valueEntered.addEventListener("keypress",toctoc)
