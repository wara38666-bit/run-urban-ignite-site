/* LOAD HEADER */

fetch("components/header.html")
.then(res => res.text())
.then(data => {

document.getElementById("header").innerHTML = data

initMenu()

})



/* LOAD FOOTER */

fetch("components/footer.html")
.then(res => res.text())
.then(data => {

document.getElementById("footer").innerHTML = data

})



/* MENU */

function initMenu(){

const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobileMenu")

hamburger.onclick = () => {

mobileMenu.style.display =
mobileMenu.style.display === "flex"
? "none"
: "flex"

}

}



/* REVEAL ANIMATION */

const reveals = document.querySelectorAll(".reveal")

function reveal(){

const trigger = window.innerHeight * 0.8

reveals.forEach(el =>{

const rect = el.getBoundingClientRect()

if(rect.top < trigger){

el.classList.add("active")

}

})

}

window.addEventListener("scroll", reveal)

reveal()