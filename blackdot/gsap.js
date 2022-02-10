const intro = gsap.timeline({defaults: {ease: "power1.out"} });

intro.fromTo(".hide-text span", {y: "0%", opacity:1, duration: 2}, {y: "-100%", duration: 1,  delay: 1});

intro.fromTo(".circle-intro1", {opacity: 0,}, {opacity: 1})
intro.fromTo(".circle-inner1", { opacity:1, duration: 1.5, scale: 1}, {scale: 31, duration: 1});
intro.fromTo(".intro",{y: "0"} ,{y: "-100%", duration: 0.5, opacity: 0, delay: 1});



// header animation
let tl1 = gsap.timeline()

tl1.from(".nav-bar", 
    {opacity: 0, y: -200, duration: 1, delay: 3}
);
tl1.from(".main-links", 
    {opacity: 0, y: -200, duration: 1}, "-=1"
);
tl1.from(".header-name", 
    {opacity: 0, y: 200, duration: 1}
);

tl1.from(".header-text", 
    {opacity: 0, y: 200, duration: 0.6}, 
);
tl1.from(".vert-stroke", {opacity: 0, y: 100, duration: 0.6,}, )





// animate image in and out in a circle
let image = document.querySelector(".we-do-img");

gsap.fromTo(image, {
    clipPath: "circle(5% at 50% 40%)",
}, {
    clipPath: "circle(75% at 50% 50%)",
    ease: "none",

    scrollTrigger: {
        trigger: image,
        scrub: 1,
        start: "top center",
        end: "top center-=200",
    }
})


// animate text in out
let tl2 =gsap.timeline({
    scrollTrigger: {
        trigger: '.heading-right-1',
        start: 'top center',
    }
});

tl2.from(".heading-right-1", {x: -150, opacity: 0, duration: 0.6}, );
tl2.from(".text-right-1", {x: -200, opacity: 0, duration: 0.6}, "-=0.6");
tl2.from(".heading-left-1", {x: 150, opacity: 0, duration: 0.6}, "-=0.6");
tl2.from(".text-left-1", {x: 200, opacity: 0, duration: 0.6}, "-=0.6");

tl2.from(".heading-right-2", {x: -150, opacity: 0, duration: 0.6}, );
tl2.from(".text-right-2", {x: -200, opacity: 0, duration: 0.6}, "-=0.6");
tl2.from(".heading-left-2", {x: 150, opacity: 0, duration: 0.6}, "-=0.6");
tl2.from(".text-left-2", {x: 200, opacity: 0, duration: 0.6}, "-=0.6");


// about section animation
let tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-header-container",
        start: "center top",
        
    }
});

tl3.from(".hide-div p", {y: 100, opacity: 0, duration: 1, stagger: 0.2,});

let tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".about-info",
        start: "top center",
        
    }
});

tl4.from(".about-info-text", {x: -100, opacity: 0, duration: 1,});

let tl5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".title",
        start: "top center",
        
    }
});

tl5.from(".circle", {x: -100, opacity: 0, duration: 1,stagger: 0.2,});
tl5.from(".arrow-circle", {x: -100, opacity: 0, duration: 1,}, "-=1");
tl5.from(".circle-text span", {x: -100, opacity: 0, duration: 1,}, "-=1");















