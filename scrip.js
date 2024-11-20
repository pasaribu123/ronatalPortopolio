let menuicon = document.querySelector('#Menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    Sections.forEach(sec=>{
        let top = window.scrolyy;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top < offset + height){
            navLinks.forEach(links=>{
                links.classlist.remove('active');
                document.querySelector("header nav a[href*='" + id + "']").classList.add('Active');
                
                
            })
        }
    })
}
menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}