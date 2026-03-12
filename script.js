gsap.registerPlugin(ScrollTrigger)



const hamburger = document.getElementById("hamburger")
const mobileMenu = document.getElementById("mobileMenu")

hamburger.addEventListener("click",()=>{

mobileMenu.style.display =
mobileMenu.style.display === "flex"
? "none"
: "flex"

})



document.querySelectorAll(".mobile-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.style.display="none"

})

})



gsap.utils.toArray(".section").forEach((section)=>{

gsap.from(section.querySelector(".content"),{

y:80,
opacity:0,
duration:1,

scrollTrigger:{
trigger:section,
start:"top 75%",
toggleActions:"play reverse play reverse"
}

})

})



gsap.from(".hero-content",{

y:80,
opacity:0,
duration:1.5

})