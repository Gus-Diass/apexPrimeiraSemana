//pegar dois valores
function getUserInput() {
    const firstInput = parseFloat(document.getElementById("first-exercise").value)
    const secondInput = parseFloat(document.getElementById("second-exercise").value)
    return [firstInput, secondInput]
}
//se forem iguais soma
function sumTwoNumbers(num1, num2) {
    return (num1 + num2)
}
//se nao multiplica
function multiplyTwoNumbers(num1, num2) {
    return (num1 * num2)
}

function checkNumbersEquality(num1, num2) { //
    if (num1 === num2) {
        return true
    } else {
        return false
    }
}
// executa o programa!!!
function executeAddedOrMultiplied() {
    let numbersOfUser = getUserInput()

    if (checkNumbersEquality(numbersOfUser[0], numbersOfUser[1])) {
        alert(`soma ${sumTwoNumbers(numbersOfUser[0], numbersOfUser[1])}`)
    } else {
        alert(`multiply ${multiplyTwoNumbers(numbersOfUser[0], numbersOfUser[1])}`)

    }

}