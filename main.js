menu = document.querySelector("#menu_btn");
nav = document.querySelector("#nav-m");
body  = document.querySelector("#body");
menu.onclick = function (){
    
    nav.classList.toggle("active");
};

let crsr = document.querySelector(".cursor");
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x +  "px"
    crsr.style.top = dets.y + "px"

})
