let sunIcon = document.querySelector('.fa-sun')
let moonIcon = document.querySelector('.fa-moon')
let btnMode = document.querySelector('.btn-mode')
let index = 0

btnMode.addEventListener('click', () => {

    if (index === 0) {

        // dark
        index = 1

        // class ACTIVE
        sunIcon.classList.remove('active')
        moonIcon.classList.add('active')

        // fundo e botão
        document.body.style.backgroundColor = 'var(--primary-dark-color)'
        btnMode.style.backgroundColor = 'var(--primary-light-color)'

        // cor do icone
        sunIcon.style.color = 'var(--off-dark-color)'
        moonIcon.style.color = 'var(--on-color)'

        // fundo icone ativado
        moonIcon.style.backgroundColor = 'var(--off-dark-color)'
    }
    else if (index === 1) {

        // light
        index = 0

        // class ACTIVE
        moonIcon.classList.remove('active')
        sunIcon.classList.add('active')

        // fundo e botão
        document.body.style.backgroundColor = 'var(--primary-light-color)'
        btnMode.style.backgroundColor = 'var(--primary-dark-color)'

        // cor do icone
        sunIcon.style.color = 'var(--on-color)'
        moonIcon.style.color = 'var(--off-light-color)'

        // fundo icone desativado
        moonIcon.style.backgroundColor = 'var(--primary-dark-color)'
    }
})