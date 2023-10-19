const calculateButton = document.getElementById("calculate");
const lengthInput = document.getElementById("length");
const positionInput = document.getElementById("position");
const velocityInput = document.getElementById("velocity");
const accelerationInput = document.getElementById("acceleration");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", function() {
    const length = parseFloat(lengthInput.value);
    const position = parseFloat(positionInput.value);
    const velocity = parseFloat(velocityInput.value);
    const acceleration = parseFloat(accelerationInput.value);

    if (!isNaN(length) && !isNaN(position) && !isNaN(velocity) && !isNaN(acceleration) && length > 0) {
        const g = 9.81;
        const period = 2 * Math.PI * Math.sqrt(length / g);
        resultDiv.innerHTML = `O período é de aproximadamente ${period.toFixed(2)} segundos.`;
    } else {
        resultDiv.innerHTML = "Por favor, insira valores válidos ";
    }
});