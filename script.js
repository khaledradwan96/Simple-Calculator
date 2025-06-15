function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultDiv = document.getElementById("result");

    let result;
    switch (operation) {
        case "+":
        result = num1 + num2;
        break;
        case "-":
        result = num1 - num2;
        break;
        case "*":
        result = num1 * num2;
        break;
        case "/":
        result = num1 / num2;
        break;
        default:
        result = "Unknown operation";
    }

    resultDiv.textContent = `Result: ${result}`;
    resultDiv.style.color = "green";
}
