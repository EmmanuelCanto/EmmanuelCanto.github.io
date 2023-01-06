pageTransition = () => {
    var timeline = gsap.timeline();

    timeline.to(".page-transition", {
        height: "100%",
        top: "0%"
    
    });
    timeline.to(".page-transition", {
        height: "100%",
        top: "0%",
    });
    window.onload = (event)=>{
        timeline.to(".page-transition", {
            duration:1,
            height: "100%",
            top: "100%",
            delay:.3
        });
        timeline.set(".page-transition", {
            top: "-100%"
        });
    }

}


pageTransition()



