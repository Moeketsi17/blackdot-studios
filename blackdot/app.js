const navLinks = document.querySelector(".nav-links")
const burger = document.querySelector(".burger")
const links = document.querySelectorAll('.main-links li')
const linksSocial = document.querySelectorAll('.nav-social-links a')
const linksContact = document.querySelectorAll('.nav-contact p')

burger.addEventListener('click', () => {
    navLinks.classList.toggle("active");
    //nav items fade
    links.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.3}s `
        }
        console.log(index)
        
    })

    linksSocial.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.5}s `
        }
        console.log(index)
        
    })

    linksContact.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.4s ease forwards ${index / 4 + 0.8}s `
        }
        console.log(index)
        
    })
    
})



// vustom cursor
let mouseCursor = document.querySelector(".cursor");
let mainLinks = document.querySelectorAll('.main-links li a');
let footerLinks = document.querySelector(".footer-cursor")

window.addEventListener("mousemove", cursor)
function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

mainLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-link");
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-link");
    });
})

// footerLinks.forEach(link => {
//     link.addEventListener("mouseleave", () => {
//         mouseCursor.classList.remove("link-grow");
//         link.classList.remove("hovered-link");
//     });
//     link.addEventListener("mouseover", () => {
//         mouseCursor.classList.add("link-grow");
//         link.classList.add("hovered-link");
//     });
// })




// mouse grab scroll
const slider = document.querySelector('.slider-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
});















