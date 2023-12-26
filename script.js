function loco(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();

var clutter = "";

document.querySelector("#page2>h1").textContent.split(" ").forEach(function(dets){
  clutter += `<span> ${dets} </span>`;

  document.querySelector("#page2>h1").innerHTML = clutter;
})

gsap.to("#page2>h1>span", {
  scrollTrigger:{
    trigger:`#page2>h1>span`,
    start:`top bottom`, // first is for the element value and second is for the screen value 
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5,
    markers:true,
  },
  stagger:.2,
  color:`white`,
})