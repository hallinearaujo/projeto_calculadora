/*function calcular (){
    var num1 = parseFloat(document.getElementById(num1).value);
    var operador = parseFloat(document.getElementById(operador).value);
    var num2 = parseFloat(document.getElementById(num2).value);

    if (operador == "+")
    resultado = num1 + num2;

    else if (operador == "-")
    resultado = num1 - num2;

    else if (operador == "/")
    resultado = num1/num2;

    else (operador == "*")
    resultado = num1*num2;
} */

function calcular(){
    calculadora.resultado.value = eval(calculadora.resultado.value)
}

