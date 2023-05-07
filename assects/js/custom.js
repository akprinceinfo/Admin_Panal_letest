var nav_section = document.querySelector(".nav-section");
var toggle = document.querySelector(".nav-section i");

  
 toggle.addEventListener("click", ()=>{
     const isopen = nav_section.classList.toggle("active");
    toggle.classList = isopen ? 'ph ph-x' : 'ph ph-equals';
 });



//  toggle.addEventListener("click", () => {

//      const isopen = nav_section.classList.toggle("active");

//      toggle.classList = isopen ? 'ph ph-x' : 'ph ph-equals';

//  });


