const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function() {
        const atual = document.querySelector('.ativo');
        let proximoPasso = 'passo-' + this.getAttribute('data-proximo');
        
        if (atual.id === 'passo-4' || 'passo-6') {
            let doisPassos = 'passo-'
            const numeroAleatorio = Math.random();
            const resultado = Math.floor(numeroAleatorio * 2) + 1;
            
            if (resultado % 2 === 0) {
                atual.classList.remove('ativo');
                document.getElementById(proximoPasso).classList.add('ativo');
            }
            else {
                atual.classList.remove('ativo');
                document.getElementById()
            }
        }

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});