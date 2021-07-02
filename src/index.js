import './scss/style.scss'

const menus = document.querySelectorAll('.screen__menu')
const startMenu = document.querySelector('.screen__main')
const controlMenu = document.querySelector('.screen__controls')
const endGameMenu = document.querySelector('.screen__endgame')
controlMenu.classList.add('hide')
endGameMenu.classList.add('hide')

startMenu.addEventListener('click', event => {
    openControls(event)
    StartGameHandler(event)
})
endGameMenu.addEventListener('click', event => {
    openControls(event)
    StartGameHandler(event)
    if (event.target.dataset.type === "menu") {
        location.href = location.href
    }
})
controlMenu.addEventListener('click', event => {
    if (event.target.dataset.type === 'back') {
        controlMenu.classList.add('hide')
    }
})
function openControls(event) {
    if (event.target.dataset.type === 'controls') {
        controlMenu.classList.remove('hide')
    }
}
function StartGameHandler(event) {
    if (event.target.dataset.type === "start") startGame()
}
//gameplay ----------------

function startGame() {
    menus.forEach(el => { el.classList.add('hide') })
    const screenGame = document.createElement('div')
    screenGame.classList.add('screen__game')
    startMenu.insertAdjacentElement('beforebegin', screenGame)
    screenGame.innerHTML = getGameHTML
}
function getGameHTML() {
    return `
    
    `
}