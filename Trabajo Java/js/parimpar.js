document.addEventListener('DOMContentLoaded', function () {
    const numeroInput = document.getElementById('numero');
    const resultadoP = document.getElementById('resultado');
    const verificarButton = document.getElementById('verificarButton');

    verificarButton.addEventListener('click', function () {
        const numero = parseFloat(numeroInput.value);

        if (isNaN(numero) || !Number.isInteger(numero) || numero <= 0) {
            resultadoP.textContent = 'Debes ingresar números enteros positivos.';
        } else if (numero % 2 === 0) {
            resultadoP.textContent = 'El número es Par.';
        } else {
            resultadoP.textContent = 'El número es Impar.';
        }
    });
});
