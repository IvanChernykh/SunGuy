import './scss/style.scss'

const startMenu = document.querySelector('.screen__main')
const controlMenu = document.querySelector('.screen__controls')
const endGameMenu = document.querySelector('.screen__endgame')
const menus = [startMenu, controlMenu, endGameMenu]
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
    const char = screenGame.querySelector('.game__character')
    let gameSpeed = 1
    let obstCount = 0;

    document.addEventListener('keydown', event => { if (event.code === 'Space') jump() })
    screenGame.addEventListener('click', jump)

    spawnObstacle()

    function spawnObstacle() {
        obstCount++
        if (obstCount % 10 === 0) gameSpeed = +(gameSpeed * 1.05).toFixed(2)
        let obstX = 105
        const obst = document.createElement('div')
        obst.classList.add('obstacle')
        screenGame.insertAdjacentElement('beforeend', obst)
        setInterval(() => {
            obst.style.left = `${obstX -= gameSpeed}%`;
            if (obstX < -5) obst.remove()
            isAlive(obstX)
        }, 15);
        const spawnTime = getRandomNum(500, 2500)
        setTimeout(() => {
            spawnObstacle()
        }, spawnTime);
    }
    function jump() {
        if (!char.classList.contains('jump')) {
            char.classList.add('jump')
            setTimeout(() => {
                char.classList.remove('jump')
            }, 500)
        }
    }
    function isAlive(obstX) {
        const charY = parseInt(window.getComputedStyle(char).bottom)
        if (charY <= 110 && (obstX <= 25 && obstX >= 20)) {
            console.log('you died');
        }
    }
}
function getRandomNum(min, max) {
    const a = Math.floor(Math.random() * (max - min) + min)
    console.log(a);
    return a
}
function getGameHTML() {
    return `
        <div class="game__ground"></div>
        <div class="game__bg"></div>
        <div class="game__character"></div>
    `
}