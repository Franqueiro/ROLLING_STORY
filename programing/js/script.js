const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        let proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        
        // Check if the current step is passo-4 or passo-6
        if (atual.id === 'passo-4' || atual.id === 'passo-6') {
            const numeroAleatorio = Math.random();
            const resultado = Math.floor(numeroAleatorio * 2) + 1;
            
            if (resultado % 2 === 0) {
                proximoPasso
            } 
            else {
                const proximoPassoNumero = parseInt(this.getAttribute('data-proximo'), 10) + 1;
                proximoPasso = 'passo-' + proximoPassoNumero;
                console.log("Número ímpar, pula para o próximo passo.");
            }
        }
        
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});