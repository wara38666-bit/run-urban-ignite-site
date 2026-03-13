const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobileMenu")

hamburger.onclick = () => {

mobileMenu.style.display =
mobileMenu.style.display === "flex"
? "none"
: "flex"

}



/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal")

function revealOnScroll(){

const trigger = window.innerHeight * 0.8

reveals.forEach(el =>{

const rect = el.getBoundingClientRect()

if(rect.top < trigger){

el.classList.add("active")

}

})

}

window.addEventListener("scroll", revealOnScroll)

revealOnScroll()