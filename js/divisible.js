document.addEventListener('DOMContentLoaded', function () {
    const numeroAInput = document.getElementById('numeroA');
    const numeroBInput = document.getElementById('numeroB');
    const resultadoP = document.getElementById('resultado');
    const verificarButton = document.getElementById('verificarButton');

    verificarButton.addEventListener('click', function () {
        const numeroA = parseInt(numeroAInput.value);
        const numeroB = parseInt(numeroBInput.value);

        if (isNaN(numeroA) || isNaN(numeroB) || numeroA <= 0 || numeroB <= 0) {
            resultadoP.textContent = 'Debes ingresar números enteros positivos.';
        } else if (numeroA % numeroB === 0) {
            resultadoP.textContent = `El número ${numeroA} es divisible entre el número ${numeroB}.`;
        } else {
            resultadoP.textContent = `El número ${numeroA} no es divisible entre el número ${numeroB}.`;
        }
    });
});
