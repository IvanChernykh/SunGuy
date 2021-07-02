const obstClasses = ['obst-1', 'obst-2', 'obst-3', 'obst-4']
export class Obstacle {
    constructor(tag, cls) {
        const obst = document.createElement(tag)
        obst.classList.add(cls)
        obst.classList.add(obstClasses[Math.round(Math.random() * (obstClasses.length - 1))])
        return obst
    }
}