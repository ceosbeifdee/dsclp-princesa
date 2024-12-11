let btns = document.querySelector(".yes")
let btnn = document.querySelector(".no")
let height = window.innerHeight - 50
let width = window.innerWidth - 50

function desviar() {
    btnn.style.position = "absolute"
    btnn.style.top = Math.random() * height + "px"
    btnn.style.left = Math.random() * width + "px"
}

btnn.addEventListener("click", desviar)
btnn.addEventListener("mouseover", desviar)
btnn.addEventListener("touchstart", desviar)

function sim() {
    window.location.href = "tamo.html"
}

btns.addEventListener("click", sim)
btns.addEventListener("touchend", sim)