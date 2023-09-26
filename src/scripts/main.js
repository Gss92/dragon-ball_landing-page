document.addEventListener('DOMContentLoaded', function() {

    const buttons = document.querySelectorAll('[data-tab-button]')
    const questions = document.querySelectorAll('[data-faq-question]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const tabTarget = btn.target.dataset.tabButton
            const tab = document.querySelector
        })
    }

    // Seção dos episódios - Programação do botões
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(btn) {
            const tabTarget = btn.target.dataset.tabButton
            const tab = document.querySelector(`[data-tab-id=${tabTarget}]`)
            removeBotaoAtivo()
            btn.target.classList.add('episodes__button--active')
            escondeEpisodio()
            tab.classList.add('episodes__content__list__item--active')
        })
    }

    // Seção FAQ - Accordion
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreFechaResposta)
    }
})

function removeBotaoAtivo() {
    const buttons = document.querySelectorAll('[data-tab-button]')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('episodes__button--active')
    }
}

function escondeEpisodio() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]')

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('episodes__content__list__item--active')
    }
}

function abreFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open'
    const elementoPai = elemento.target.parentNode

    elementoPai.classList.toggle(classe)
}