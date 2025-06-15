function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operation = document.getElementById("operation").value;
    const resultDiv = document.getElementById("result");

    let result;

    // ===== Validate input =====
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = "Please enter valid numbers.";
        resultDiv.style.color = "red";
        return;
    }

    // =====  Prevent division by zero =====
    if (operation === "/" && num2 === 0) {
        resultDiv.textContent = "Error: Division by zero!";
        resultDiv.style.color = "red";
        return;
    }

    
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

    document.getElementById("num1").value = result;
    resultDiv.textContent = `Result: ${result}`;
    resultDiv.style.color = "green";
}


function clearCalculator() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
}
