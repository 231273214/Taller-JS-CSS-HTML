function identificarParesImpares() {
    const numerosInput = document.getElementById("numeros").value;
    const numeros = numerosInput.split(",").map(numero => parseFloat(numero.trim()));
    const resultado = document.getElementById("resultado");

    let output = "";

    for (let i = 0; i < numeros.length; i++) {
        if (!Number.isInteger(numeros[i])) {
            output += `${numeros[i]} no es un número entero\n`;
        } else if (numeros[i] % 2 === 0) {
            output += `${numeros[i]} es número par|\n`;
        } else {
            output += `${numeros[i]} es número impar|\n`;
        }
    }

    resultado.innerHTML = output;
}
