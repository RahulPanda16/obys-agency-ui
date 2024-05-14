function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

// locomotiveAnimation()

var tl = gsap.timeline()
tl.from(".line h1", {
    y:150,
    stagger:0.25,
    duration:0.6,
    delay:0.5
})

tl.from(".loader-timer span, .special-text" ,{
    opacity:0,
    onStart: function(){
            var timer = document.querySelector(".loader-timer span")
            var grow = 0

            setInterval(function(){
            if(grow < 100){
                timer.innerHTML = grow++
            }else{
                timer.innerHTML = grow
            }
            },33)
    }
})

tl.to(".loader",{
    opacity:0,
    duration:0.4,
    delay:4,
})

tl.from(".page1",{
    delay:0.2,
    y:1600,
    opacity:0,
    ease:"power4.out"
})

tl.to(".loader", {
    display:"none"
})

tl.from(".hero-text-box h1,.hero-title",{
    y:120,
    stagger:0.2
})

document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y,
    })
})

Shery.makeMagnet(".nav-links", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

let year = document.querySelector(".year")
let currYear = new Date().getFullYear()
year.textContent = currYear;