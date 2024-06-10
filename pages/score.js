window.onload = function() {
    let controlsScore = 1;
    let scoreValue = document.getElementById('controlsScore');
    let productPriceElement = document.getElementById('productPrice');

    let unitPrice = parseFloat(productPriceElement.textContent.replace('R$', '').replace(',', '.'));

    function updateTotalPrice() {
        let totalPrice = (controlsScore * unitPrice).toFixed(2); 
        productPriceElement.textContent = `R$ ${totalPrice.toString().replace('.', ',')}`;
    }

    window.incrementScore = function(control) {
        if (control === 'controls') {
            controlsScore++;
            if (scoreValue) {
                scoreValue.textContent = controlsScore; 
                updateTotalPrice(); 
            } else {
                console.error('Elemento scoreValue não encontrado!');
            }
        } else {
            console.log('Erro: controle desconhecido');
        }
    }

    window.decrementScore = function(control) {
        if (control === 'controls') {
            if (controlsScore > 1) {
                controlsScore--;
                if (scoreValue) {
                    scoreValue.textContent = controlsScore; 
                    updateTotalPrice(); 
                } else {
                    console.error('Elemento scoreValue não encontrado!');
                }
            } else {
                console.log('A pontuação mínima é 1');
            }
        } else {
            console.log('Erro: controle desconhecido');
        }
    }

    updateTotalPrice();
}
