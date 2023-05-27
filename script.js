
let displayElement = document.getElementById('display')
let number0Button = document.getElementById('number0')
let number1Button = document.getElementById('number1')
let number2Button = document.getElementById('number2')
let number3Button = document.getElementById('number3')
let number4Button = document.getElementById('number4')
let number5Button = document.getElementById('number5')
let number6Button = document.getElementById('number6')
let number7Button = document.getElementById('number7')
let number8Button = document.getElementById('number8')
let number9Button = document.getElementById('number9')
let minusButton = document.getElementById('minus')
let resultButton = document.getElementById('result')
let sumButton = document.getElementById('sum')
let limparButton = document.getElementById('limpar')
let multiButton = document.getElementById('multi')
let diviButton = document.getElementById('divi')
let delButton = document.getElementById('del')

function inserirElemento (tecla) {
  let elementoInserido = tecla.target.innerText
  let ultimoElemento = displayElement.innerText[displayElement.innerText.length - 1]
  if ((elementoInserido === ultimoElemento || ultimoElemento === "+" || ultimoElemento === "-" || ultimoElemento === "*" || ultimoElemento === "/") && 
  (elementoInserido === "+" || elementoInserido === "-" || elementoInserido === "*" || elementoInserido === "/")) {
  }
  else if(ultimoElemento == null && (elementoInserido == "+" || elementoInserido == "*" || elementoInserido == "/")){

  }
  else{
    displayElement.innerText += elementoInserido
  }
}

function limparDisplay () { 
  displayElement.innerText = null
}

function calcularResultado () {
  let ultimoElemento = displayElement.innerText[displayElement.innerText.length - 1]

  if (ultimoElemento != null){
  let resultado = eval(displayElement.innerText)
  displayElement.innerText = resultado
  }
}

function apagarUltimoElemento () {
  let elementos = displayElement.innerText
  elementos = elementos.slice(0,elementos.length - 1)
  displayElement.innerText = elementos
}

delButton.addEventListener('click', apagarUltimoElemento)
resultButton.addEventListener('click', calcularResultado)
limparButton.addEventListener('click', limparDisplay)
diviButton.addEventListener('click', inserirElemento)
multiButton.addEventListener('click', inserirElemento)
sumButton.addEventListener('click', inserirElemento)
minusButton.addEventListener('click', inserirElemento)
number0Button.addEventListener('click', inserirElemento)
number1Button.addEventListener('click', inserirElemento)
number2Button.addEventListener('click', inserirElemento)
number3Button.addEventListener('click', inserirElemento)
number4Button.addEventListener('click', inserirElemento)
number5Button.addEventListener('click', inserirElemento)
number6Button.addEventListener('click', inserirElemento)
number7Button.addEventListener('click', inserirElemento)
number8Button.addEventListener('click', inserirElemento)
number9Button.addEventListener('click', inserirElemento)
