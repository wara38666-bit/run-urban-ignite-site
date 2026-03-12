gsap.registerPlugin(ScrollTrigger)



/* MOBILE MENU */

const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

menuToggle.addEventListener("click",()=>{

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



/* HERO PARALLAX */

gsap.to(".hero-video",{

yPercent:20,
ease:"none",

scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:true
}

})



/* SECTION SCROLL MOTION */

gsap.utils.toArray(".section").forEach((section)=>{

gsap.from(section,{

opacity:0,
y:120,

scrollTrigger:{
trigger:section,
start:"top 80%",
end:"top 40%",
scrub:true
}

})

})