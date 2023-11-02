function identifyDataType() {
    const userInput = document.getElementById("user-input").value;
    const result = document.getElementById("result");

    if (!isNaN(userInput)) {
        result.textContent = "Número";
    } else {
        result.textContent = "Texto";
    }
}
