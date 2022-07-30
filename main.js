// Typing sccript

var typed = new Typed(".typing", { strings: ["Web Designer", "Web Developer", "Photographar"],
typeSpeed:80,
backSpeed:80, 
});
var typed = new Typed(".typing-2", { strings: ["Web Developer", "Web Designer", "Photographar"],
typeSpeed:100,
backSpeed:80, 
});


// Hide/show answer

let answers = document.querySelectorAll(".accordion");
answers.forEach((event) => {
  event.addEventListener("click", () => {
    if (event.classList.contains("active")) {
      event.classList.remove("active");
    } else {
      event.classList.add("active");
    }
  });
});


// navber show/hide 

const navToggler = document.querySelector(".nav-toggler");

navToggler.addEventListener("click", navToggle);

function navToggle() {
 navToggler.classList.toggle("active");
 const nav =document.querySelector(".nav");
 nav.classList.toggle("open");
 if(nav.classList.contains("open")){
   nav.style.maxHeight = nav.scrollHeight + "px";
 }else{
   nav.removeAttribute("style");
 }
  
}


