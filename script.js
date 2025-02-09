document.addEventListener("DOMContentLoaded", () => {
    let main = document.querySelector(".main")

    

    if (main) {
        let timeline = gsap.timeline({paused: true});

        timeline
            .add(textAnimation())
            .add(h2Animation())
            .add(canvasAnimation());

        main.addEventListener("mouseenter", ()=> {
            timeline.play()
        })

        main.addEventListener("mouseleave", () => {
            timeline.reverse()
        })

        task1();
        secondPageAnimation();
    }
})

function canvasAnimation() {
    let canvas1 = document.querySelector(".canvas1")
    let canvas2 = document.querySelector(".canvas2")

    gsap.from(".canvas1", {
        opacity: 0,
        rotate: "45deg",
        duration: 0.7,
        ease: "back.out"
    }, "-=0.2")

    gsap.from(".canvas2 ", {
        opacity: 0,
        rotate: "-45deg",
        duration: 0.7,
        ease: "back.out"
    }, "-=0.2")

    gsap.from(".canvas3", {
        opacity: 0,
        x: "-50%",
        duration: 0.7,
        ease: "back.out"
    }, "-=0.2")
}

function task1() {
    var menu = document.querySelector("nav i")
    var close = document.querySelector(".full i")
    var body = document.querySelector("body")

    var tl = gsap.timeline()

    tl.to(".full",{
        right:0,
        duration: 0.2
    })

    tl.from(".full h1", {
        x:150,
        opacity: 0,
        duration: 0.3,
        stagger: 0.2,
    })

    tl.from(".full i", {
        opacity: 0
    })

    tl.pause()

    menu.addEventListener("click", function(){
        tl.play()
    })

    close.addEventListener("click", function() {
        tl.reverse()
    })

    gsap.from("nav h1", {
        opacity: 0,
        y: -40,
        duration: 2
    })

    gsap.from("nav i", {
        opacity: 0,
        y: -40,
        duration: 0.8
    })

    body.addEventListener("mousemove", function(dets){
        gsap.to(".cursor", {
            x:dets.x,
            y:dets.y,
            ease: "back.out",
            duration: 1
        })
    })
}


function textAnimation() {

    let h1 = document.querySelector(".main h1")
    let splittedH1 = h1.textContent.split("")
    let clutter = "";

    splittedH1.forEach((letter, index) => {
        clutter += `<span class="a">${letter}</span>`
    })

    console.log(clutter)

    h1.innerHTML = clutter


    gsap.from(".main h1 .a", {
        opacity: 0,
        backgroundColor: "#213555",
        rotate: -180,
        duration: 0.6,
        y: -300,
        delay: 0.5,
        stagger: 0.3,
        ease: "back.inOut"
    })

}

function h2Animation() {
    let h2 = document.querySelector(".main h2")
    let h2Content = h2.textContent
    let midValue = Math.floor(h2Content.length/2)
    let firstString = h2Content.substring(0, midValue)
    let lastString = h2Content.substring(midValue)

    h2.innerHTML = `<span class="part1">${firstString}</span><span class="part2">${lastString}</span>`
    
    gsap.from(".main h2 .part1", {
        opacity: 0,
        y: -200,
        duration: 1,
        delay: 1,
    })

    gsap.to(".main h2 .part2", {
        opacity: 1,
        y: 200,
        duration: 1,
        delay: 1,
        color: "#213555"
    })
}


function secondPageAnimation() {
    gsap.to(".secondPart h1", {
        // transform: "translate(-70%)",
        x: "-70%",
        duration: 2,
        scrollTrigger: {
            trigger: ".secondPart",
            scroller: "body",
            start: "top 0%",
            end: "top -100%",
            scrub: 5
        }
    })
}
