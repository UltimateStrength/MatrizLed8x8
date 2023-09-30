// Código Principal

document.addEventListener('DOMContentLoaded', function () {

        //Constantes
    const matrixContainer = document.getElementById('led-matrix');
    const generateCodeButton = document.getElementById('generate-code-button');
    const codeOutput = document.getElementById('code-output');

    const matrix = [];

        // Reset de Matriz
    for (let row = 0; row < 8; row++) {

        const newRow = [];
        for (let col = 0; col < 8; col++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.dataset.state = '0';

        // Código do Mouse para Pintar
                pixel.addEventListener('mousedown', function (e) {

                    if (e.buttons === 1) {
                        togglePixel(this);

                    }
                    
                    else if (e.buttons === 2) {
                        togglePixel(this);

                    }
            });

            matrixContainer.appendChild(pixel);
            newRow.push(pixel);

        }

        matrix.push(newRow);

    }

        // Função de Pintar
    function togglePixel(pixel) {
        const currentState = pixel.dataset.state;
        const newState = currentState === '0' ? '1' : '0';
        pixel.dataset.state = newState;
        pixel.classList.toggle('on', newState === '1');

    // 0 = Sem Pixel
    // 1 = Com Pixel

    }

    // Botão de Saida
    generateCodeButton.addEventListener('click', function () {
        const code = matrix.map(row => 'B' + row.map(pixel => pixel.dataset.state).join('')).join(',\n') + ',';
        codeOutput.value = code;

        // Função Area de Transferencia
        const textArea = document.createElement("textarea");
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        alert("Código Copiado!");

    });

});
