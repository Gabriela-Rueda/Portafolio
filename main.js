const menu= document.querySelector("ul.ul-prin")
const icon= document.getElementById("menu-icon")

icon.addEventListener("click", toggleMenu)

function toggleMenu(){
menu.classList.toggle("visible")
}
