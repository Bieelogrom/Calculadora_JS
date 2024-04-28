const userInput = document.querySelector("#userInput")
var expression = "";

function ArmazenaValores(num){
    expression += num
    userInput.value = expression
}

function Igual(){
    userInput.value = eval(expression)
    expression = ""
}


