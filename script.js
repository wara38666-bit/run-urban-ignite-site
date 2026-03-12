const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click",()=>{

mobileMenu.style.display =
mobileMenu.style.display === "flex"
? "none"
: "flex"

})



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

{
threshold:0.2
}

)

revealItems.forEach(el=>observer.observe(el))