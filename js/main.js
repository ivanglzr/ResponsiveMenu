let menuIcon = document.querySelector(".icon")
let hiddenNavUl = document.querySelector(".hidden-nav__ul")
let ocultedNav = true

menuIcon.addEventListener("click", ()=>{
  if (ocultedNav) {
    hiddenNavUl.style.marginLeft = "0px"
    ocultedNav = false
  } else {
    hiddenNavUl.style.marginLeft = "1000px"
    ocultedNav = true
  }
})