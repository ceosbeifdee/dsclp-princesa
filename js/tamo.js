function mover(e) {
    let body = document.querySelector("body")
    let heart = document.createElement("span")
    let x, y

    if (e.type == "mousemove") {
        x = e.offsetX
        y = e.offsetY
    } else if (e.type == "touchmove") {
        let touch = e.touches[0]

        x = touch.clientX
        y = touch.clientY
    }

    heart.style.left = x + "px"
    heart.style.top = y + "px"

    let size = Math.random() * 80

    heart.style.height = 20 + size + "px"
    heart.style.width = 20 + size + "px"

    let transformValue = Math.random() * 360

    heart.style.transform = `rotate(${transformValue}deg)`+

    body.appendChild(heart)

    setTimeout(function() {
        heart.remove()
    }, 1000)
}

document.addEventListener("mousemove", mover)
document.addEventListener("touchmove", mover)

let btn = document.querySelector(".btn")

const elogios = [
    "linda"
]

let msg = document.querySelector(".msg")

function msg() {
    let i = Math.floor(Math.random() * elogios.length)
    let randomMsg = elogios[i]

    msg.innerHTML = randomMsg
}

btn.addEventListener("click", msg)
btn.addEventListener("touchend", msg)