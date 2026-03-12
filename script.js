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



/* SCROLL REVEAL */

const reveals = document.querySelectorAll(".reveal")

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show")

}else{

entry.target.classList.remove("show")

}

})

},
{
threshold:0.2
}

)

reveals.forEach(el=>observer.observe(el))



/* HERO PARALLAX */

const hero = document.querySelector(".hero")

window.addEventListener("scroll",()=>{

const scroll = window.scrollY

hero.style.transform = `translateY(${scroll * 0.1}px)`

})