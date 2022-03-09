
function mediaCalculator(array) {
    
    let result = 0;

    for (let index = 0; index < array.length; index++) {
        result =  result + array[index];
    }

    result = result / array.length;

    return result.toFixed(2);
}


var localResultado = document.getElementById('texto-resultado');

media = [7.5, 8.7, 2.5, 5.5];

localResultado.textContent = `A média calculada de ${media.length} semestres é: ${mediaCalculator(media)}`;