const avanca = document.querySelectorAll('.btn-proximo');
const closeButtons = document.querySelectorAll('.close-button');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    });
});

closeButtons.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        atual.classList.remove('ativo');
        document.getElementById('passo-0').classList.add('ativo');
    });
});
