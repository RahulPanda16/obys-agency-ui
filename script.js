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

tl.from(".hero-title",{
    opacity:0
},"-=1.2")


// document.addEventListener("mousemove", function (dets) {
//     gsap.to(".cursor",{
//         left:dets.x,
//         top:dets.y,
//     })
// })

Shery.makeMagnet(".nav-links", {
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  var videoContainer = document.querySelector(".video-container");
  var video = document.querySelector(".video-container video")
  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".cursor", {
        opacity: 0
      });
      gsap.to(".video-crsr", {
        left: dets.x - 370,
        y: dets.y -120 ,
      });
    });
  });

  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".cursor", {
      opacity: 1

    });
    gsap.to(".video-crsr", {
      left: "70%",
      top: "-10%",
    });
  });


  var flag = 0
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play()
      video.style.opacity = 1
      document.querySelector(".video-crsr").innerHTML = `<ion-icon name="pause-outline"></ion-icon>`
      gsap.to(".video-crsr", {
        scale: 0.5
      })
      flag = 1
    } else {
      video.pause()
      video.style.opacity = 0
      document.querySelector(".video-crsr").innerHTML = `<ion-icon name="play-outline"></ion-icon>`
      gsap.to(".video-crsr", {
        scale: 1
      })
      flag = 0
    }
  })


  document.addEventListener("mousemove", function (dets) {
    gsap.to(".flag", {
      x: dets.x,
      y: dets.y
    })
  })

  function flagAnimation() {

   
    document.querySelector(".text-effect").addEventListener("mouseenter", function () {
      gsap.to(".flag", {
        opacity: 1
      })
    })
    document.querySelector(".text-effect").addEventListener("mouseleave", function () {
      gsap.to(".flag", {
        opacity: 0
      })
    })
  
  }

  flagAnimation()


function sheryAnimation() {
    Shery.imageEffect(".image-div img", {
      style: 5,
      gooey: true,
      config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    });
  }

// sheryAnimation()

function cursorAnimation(){
    Shery.mouseFollower({
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
}

// cursorAnimation()

let year = document.querySelector(".year")
let currYear = new Date().getFullYear()
year.innerHTML = currYear;