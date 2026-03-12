const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")
const header = document.getElementById("siteHeader")



menuToggle.addEventListener("click",()=>{

mobileMenu.style.display =
mobileMenu.style.display === "flex"
? "none"
: "flex"

})



/* CLOSE MENU WHEN CLICK LINK */

document.querySelectorAll(".mobile-menu a")
.forEach(link=>{

link.addEventListener("click",()=>{

mobileMenu.style.display="none"

})

})



/* SCROLL REVEAL */

const revealItems = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("in-view")

}else{

entry.target.classList.remove("in-view")

}

})

},
{threshold:.2}

)

revealItems.forEach(el=>observer.observe(el))



/* HERO PARALLAX */

const hero = document.querySelector(".hero")

window.addEventListener("scroll",()=>{

const scroll = window.scrollY

hero.style.backgroundPositionY = scroll * .5 + "px"

})