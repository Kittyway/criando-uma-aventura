
const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})


/*
avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso =  'passo-' + this.getAttribute('data-procimo');

Nosso próximo passo será capturar o passo atual e, em seguida, avançar para o próximo. Desta forma, precisaremos remover a classe ativo do passo atual e adicioná-la ao passo seguinte.

Para isso, removeremos a classe ativo da div atual e a adicionaremos à próxima div, usando os métodos classList.remove e classList.add.


        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo')

        Então, a atual.classList.remove('ativo') remove a classe ativo da div atual, e o document.getElementById(proximoPasso).classList.add('ativo') adiciona a classe ativo à próxima div.
        
    })
})
    */