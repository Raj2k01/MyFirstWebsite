/**sticky navbar */
window.onscroll=()=>{
    let header=document.querySelector('.header');
    header.classList.toggle('sticky',window.scrollY > 100)
};

//menu icon navbar

let menuIcon = document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick= ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};
//dark mode and light mode

let darkModeIcon = document.querySelector('#darkmode-icon');
darkModeIcon.onclick=()=>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};

//scroll reveal

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});
ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img img, .portfolio-box, .contact',{origin:'bottom'});