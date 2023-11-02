function contarCaracteres() {
    const textoInput = document.getElementById('texto');
    const contadorSpan = document.getElementById('contador');

    const texto = textoInput.value;
    const caracteres = texto.length;
    contadorSpan.textContent = caracteres;
}
