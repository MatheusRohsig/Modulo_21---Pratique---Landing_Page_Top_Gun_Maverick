document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    


    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('filme__list__item--is-active');
            removeBotaoAtivo();
            botao.target.classList.add('filme__tabs__button--is-active')
        })

    }
})
    

    function removeBotaoAtivo() {
        const buttons = document.querySelectorAll('[data-tab-button]');

        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('filme__tabs__button--is-active')
        }
    }

function escondeTodasAbas() {
    tabsContainer = document.querySelectorAll('[data-tab-id');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('filme__list__item--is-active');
    }
}

