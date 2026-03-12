const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobileMenu")

hamburger.onclick = () => {

mobileMenu.style.display =
mobileMenu.style.display === "flex"
? "none"
: "flex"

}

/* SCROLL REVEAL */

const sections = document.querySelectorAll(".section")

window.addEventListener("scroll",()=>{

sections.forEach(section=>{

const rect = section.getBoundingClientRect()

if(rect.top < window.innerHeight * .75){

section.style.opacity = 1
section.style.transform = "translateY(0)"

}

})

})