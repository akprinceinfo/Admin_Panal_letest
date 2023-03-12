 var nav_section = document.querySelector(".nav-section");
 var toggle = document.querySelector("#toggle");


 toggle.addEventListener("click", () => {
     nav_section.classList.toggle("active");
 });