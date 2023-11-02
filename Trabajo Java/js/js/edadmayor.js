document.addEventListener('DOMContentLoaded', function () {
    const nombreInput = document.getElementById('nombre');
    const edadInput = document.getElementById('edad');
    const resultadoP = document.getElementById('resultado');
    const verificarButton = document.getElementById('verificarButton');

    verificarButton.addEventListener('click', function () {
        const nombre = nombreInput.value;
        const edad = parseInt(edadInput.value);

        if (isNaN(edad) || edad < 0) {
            resultadoP.textContent = 'No es una edad válida.';
        } else if (edad === 0) {
            resultadoP.textContent = 'Hola ' + nombre + ', no es una edad válida.';
        } else if (edad >= 18) {
            resultadoP.textContent = 'Hola ' + nombre + ', eres mayor de edad.';
        } else {
            resultadoP.textContent = 'Hola ' + nombre + ', no eres mayor de edad.';
        }
    });
});

