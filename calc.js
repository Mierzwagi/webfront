const numberOne = document.getElementById("number1")
const numberTwo = document.getElementById("number2")
const resultado = document.getElementById("resultado")


function calculo(operador) {
    switch (operador) {
        case "somar":
            resultado.textContent = Number(numberOne.value) + Number(numberTwo.value)
            break;
        case "subtrair":
            resultado.textContent = Number(numberOne.value) - Number(numberTwo.value)
            break;
        case "multiplicar":
            resultado.textContent = Number(numberOne.value) * Number(numberTwo.value)
            break;
        case "dividir":
            if (numberTwo.value == 0) {
                alert("Não é posivel dividir por zero")
            } else {
                resultado.textContent = Number(numberOne.value) / Number(numberTwo.value)
            }
            break;
        default:
            alert("Digite novamente")
            break;
    }
}

/* 
function somar() {
    resultado.textContent = Number(numberOne.value) + Number(numberTwo.value)
}

function subtrair() {
    resultado.textContent = Number(numberOne.value) - Number(numberTwo.value)
}
function multiplicar() {

    resultado.textContent = Number(numberOne.value) * Number(numberTwo.value)

}
function dividir() {

    if (numberTwo.value == 0) {
        alert("Não é posivel dividir por zero")
    } else {
        resultado.textContent = Number(numberOne.value) / Number(numberTwo.value)
    }

} */