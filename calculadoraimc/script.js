document.querySelector('button').addEventListener('click', calcularIMC);

function calcularIMC(){

    const peso = parseFloat(document.getElementById('pesoImc').value);
    const altura = parseFloat(document.getElementById('alturaImc').value);

    const resultadoImc = peso / (altura*altura);

    let categoria = '';
    if (resultadoImc < 18.5) {
        categoria = 'Bajo peso';
    } else if (resultadoImc < 25) {
        categoria = 'Peso normal';
    } else if (resultadoImc < 30) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidad';
    }

    document.getElementById('valorImc').textContent = resultadoImc.toFixed(2);
    document.getElementById('categoriaImc').textContent = categoria;
    document.getElementById('resultadoImc').style.display = 'block';
}

