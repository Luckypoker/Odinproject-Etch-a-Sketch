//containers
const container = document.querySelector('#container')
const content = document.createElement('div')
content.classList.add("content")
container.appendChild(content)
const display = document.createElement('div')
display.classList.add("display")
content.appendChild(display)
//User Input
function getBoxAmount () {
    answer = window.prompt('Please input an amount')
    return answer;
}
//boxes
getBoxAmount()
display.style.cssText = `grid-template-columns: repeat(${answer}, auto); grid-template-rows: repeat(${answer}, auto);`
const box1 = document.createElement('div')
for (let i = 0; i < answer; i++) {
    for (let j = 0; j < answer; j++) {
        const box1 = document.createElement('div')
        box1.classList.add('box1')
        display.appendChild(box1)
        window.addEventListener('mouseover', (colorSwap) => {
            box1.classList.add('playing')
            colorSwap.stopPropagation()
            console.log(colorSwap)
        })
    }
}

    