import '../scss/style.scss'
import { Obstacle } from './obstacle.js'

const startMenu = document.querySelector('.screen__main')
const controlMenu = document.querySelector('.screen__controls')
const endGameMenu = document.querySelector('.screen__endgame')
const menus = [startMenu, controlMenu, endGameMenu]
let isAlive
controlMenu.classList.add('hide')
endGameMenu.classList.add('hide')

startMenu.addEventListener('click', event => {
    openControls(event)
    StartGameHandler(event)
})
endGameMenu.addEventListener('click', event => {
    openControls(event)
    StartGameHandler(event)
    if (event.target.dataset.type === "menu") location.href = location.href
})
controlMenu.addEventListener('click', event => {
    if (event.target.dataset.type === 'back') controlMenu.classList.add('hide')
})
function openControls(event) {
    if (event.target.dataset.type === 'controls') controlMenu.classList.remove('hide')
}
function StartGameHandler(event) {
    if (event.target.dataset.type === "start") startGame()
}
function startGame() {
    isAlive = true
    menus.forEach(el => { el.classList.add('hide') })
    const screenGame = document.createElement('div')
    screenGame.classList.add('screen__game')
    startMenu.insertAdjacentElement('beforebegin', screenGame)
    screenGame.innerHTML = getGameHTML()
    const char = screenGame.querySelector('.game__character')
    let gameSpeed = +(0.8).toFixed(2)
    let obstCount = 0;
    let current = 0

    if (screenGame.clientWidth >= 900) gameSpeed = +(0.6).toFixed(2)
    if (screenGame.clientWidth >= 1100) gameSpeed = +(0.5).toFixed(2)

    document.addEventListener('keydown', event => { if (event.code === 'Space') jump() })
    screenGame.addEventListener('click', jump)

    spawnObstacle()
    backgroundMove()
    scoreCount()

    function backgroundMove() {
        if (isAlive) {
            const bg = screenGame.querySelector('.game__ground')
            let bgX = 0
            bg.style.left = 0
            const bgInterval = setInterval(() => {
                if (!isAlive) clearInterval(bgInterval)
                bg.style.left = `${(bgX -= gameSpeed).toFixed(2)}%`
                if (bgX <= -105) bgX = 0
            }, 10);
        }
    }
    function spawnObstacle() {
        if (isAlive) {
            obstCount++
            if (obstCount % 10 === 0) gameSpeed = +(gameSpeed * 1.05).toFixed(2)
            let obstX = 105
            const obst = new Obstacle('div', 'obstacle')
            screenGame.insertAdjacentElement('beforeend', obst)
            const spawning = setInterval(() => {
                if (!isAlive) clearInterval(spawning)
                obst.style.left = `${(obstX -= gameSpeed).toFixed(2)}%`;
                if (obstX < -5) obst.remove()
                isAliveHandler(obstX)
            }, 10);
            const spawnTime = getRandomNum(500, 2000)
            setTimeout(() => {
                spawnObstacle()
            }, spawnTime);
        }
    }
    function jump() {
        if (!char.classList.contains('jump')) {
            char.classList.add('jump')
            setTimeout(() => { char.classList.remove('jump') }, 500)
        }
    }
    function isAliveHandler(obstX) {
        const charY = parseInt(window.getComputedStyle(char).bottom)
        if (charY <= 110 && (obstX <= 25 && obstX >= 20)) {
            isAlive = false
            screenGame.remove()
            endGameMenu.querySelector('.endGame__score').innerText = `score: ${current}`
            endGameMenu.classList.remove('hide')
        }
    }
    function scoreCount() {
        const highCount = screenGame.querySelector('.game__highscore')
        const currentCount = screenGame.querySelector('.game__current')
        let high = localStorage.getItem('HighScore') || 0
        const scoreInterval = setInterval(() => {
            current += 1
            currentCount.innerText = current
            highCount.innerText = high
            if (current > high) high = current
            if (!isAlive) {
                clearInterval(scoreInterval)
                localStorage.setItem('HighScore', high)
            }
        }, 100);
    }
}
function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
function getGameHTML() {
    return `
        <div class="game__ground"></div>
        <div class="game__bg"></div>
        <div class="game__character"></div>
        <div class="game__score">
            high: <span class="game__highscore"></span><br>
            score: <span class="game__current"></span>
        </div>
    `
}