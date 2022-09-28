//containers
const container = document.querySelector('#container')
const content = document.createElement('div')
content.classList.add("content")
container.appendChild(content)
const display = document.createElement('div')
display.classList.add("display")
content.appendChild(display)
//boxes
var boxes = [];
for (let i = 0; i < 16; i++) {
    const box = document.createElement('li')
    box.classList.add('box')
    display.appendChild(box)
}
