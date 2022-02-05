function getAverageValues() {
    const firstNumber = parseFloat(document.getElementById("one").value)
    const secondNumber = parseFloat(document.getElementById("two").value)
    const thirdNumber = parseFloat(document.getElementById("three").value)
    const quarterNumber = parseFloat(document.getElementById("for").value)
    const fifthNumber = parseFloat(document.getElementById("five").value)
    return [firstNumber, secondNumber, thirdNumber, quarterNumber, fifthNumber]
}

function sumAverageValues(n1, n2, n3, n4, n5) {
    return (n1 + n2 + n3 + n4 + n5)
}

function execute() {
    let values = getAverageValues()
        (sumAverageValues(values[0], values[1], values[2], values[3], values[4]))
    alert(values)
}