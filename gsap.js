var timeLine = gsap.timeline()

timeLine.from("#logo img",{
    opacity: 0,
    y: -200,
    duration: 0.5,
    delay:0.1,
    // scrollTrigger:{
        
    // }
})

timeLine.from("#navbar ul li",{
    opacity: 0,
    y: -200,
    delay:0.1,
    duration: 0.5,
    stagger: 0.3
})
timeLine.from("#search",{
    opacity: 0,
    y: -200,
    delay:0.2,
    duration:0.4
})
timeLine.from("#right img",{
    x:900,
    opacity:0,
    duration:0.5

})
timeLine.from("#left h1",{
    x:-700,
    duration:0.5,
    delay:0.1,
    stagger: 0.3

})
timeLine.from("#left p",{
    x:-1200,
    duration:0.5,
    delay:0.1,
    stagger: 0.3,
    scrub:true

})


    