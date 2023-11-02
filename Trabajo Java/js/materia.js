function calificarMateria() {
    const nombre = document.getElementById("nombre").value;
    const materia = document.getElementById("materia").value;
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const promedio = (nota1 + nota2 + nota3) / 3;

    const resultado = document.getElementById("resultado");
    
    if (promedio >= 3.0) {
        resultado.style.backgroundColor = "#9FC131";
        resultado.innerHTML = `Felicitaciones ${nombre}, su nota es ${promedio.toFixed(2)}, Pasaste la materia ${materia}.`;
    } else {
        resultado.style.backgroundColor = "red";
        resultado.innerHTML = `Lo siento ${nombre}, su nota es ${promedio.toFixed(2)}, No pasaste la materia ${materia}.`;
    }
}
