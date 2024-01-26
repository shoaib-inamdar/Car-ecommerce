Shery.imageEffect(".backimg,.boximg", {
    style: 5,
    // debug:true,
    gooey: true,
    config: { "a": { "value": 1.83, "range": [0, 30] }, "b": { "value": 0.69, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 2.090735088717604 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": true }, "growSize": { "value": 2.92, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": false }, "maskVal": { "value": 1, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 2 }, "noise_speed": { "value": 0.2, "range": [0, 10] }, "metaball": { "value": 0.2, "range": [0, 2], "_gsap": { "id": 3 } }, "discard_threshold": { "value": 0.8, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.14, "range": [0, 2] }, "noise_scale": { "value": 10, "range": [0, 100] } }
})
// Shery.imageEffect("")
var cursor=document.querySelector(".cursor")
window.addEventListener("mousemove",(dets)=>{
    gsap.to(cursor,{
        top:dets.clientY+"px",
        left:dets.clientX+"px"
    })
    // cursor.style.top=dets.y+"px"
    // cursor.style.left=dets.x+"px"
})
var videodiv=document.querySelector(".page3 video")
function must(){
    videodiv.src="mustangvid.webm"
}
function audi(){
    videodiv.src="audivid.webm"
}
function lambo(){
    videodiv.src="lambovid.mp4"
}
function merce(){
    videodiv.src="mervid.mp4"
}

var boxh1=document.querySelector(".boxtext h1")
var boxp=document.querySelector(".boxtext p")

var boximg= document.querySelector(".boximg")

var cont1 =["lamborghini","audi","mercedes"];
var cont2 =["DISPLACEMENT 6,498 cm³ (396.5 cu in) <br>MAX. POWER:740 CV (544 kW) @ 8.400 rpm <br>TOP SPEED :350 km/h (217 mph) <br>ACCELERATION :0-100 KM/H (MPH 0-62)2.9 s","DISPLACEMENT 6,498 cm³ (396.5 cu in) <br>MAX. POWER:740 CV (544 kW) @ 8.400 rpm <br>TOP SPEED :350 km/h (217 mph) <br>ACCELERATION :0-100 KM/H (MPH 0-62)2.9 s","DISPLACEMENT 6,498 cm³ (396.5 cu in) <br>MAX. POWER:740 CV (544 kW) @ 8.400 rpm <br>TOP SPEED :350 km/h (217 mph) <br>ACCELERATION :0-100 KM/H (MPH 0-62)2.9 s"];
var f = 1
boximg.addEventListener("click",function(){
    if(f === 1) {
        boxh1.innerHTML = cont1[f];
        boxp.innerHTML = cont2[f];
        f = 2;
    }
    else if(f === 2){
        boxh1.innerHTML = cont1[f];
        boxp.innerHTML = cont2[f];
        f = 0;    
    }
    
    else if(f === 0){
        boxh1.innerHTML = cont1[f];
        boxp.innerHTML = cont2[f];
        f = 11;    
    }
})
var tl=gsap.timeline();
tl.from("nav,.left,.right h1",{
    y:-100,
    stagger:.5,
    // duration:.5
})
tl.from(".backimg",{
    scale:0,
    opacity:0,
    duration:1
})
gsap.from(".cards",{
    y:1000,
    opacity:0,
    stagger:.5,
    scrollTrigger:{
        scroller:"body",
        trigger:".page2",
        // scrub:3
        start:"top 40%",
        // markers:true
    }
})
gsap.from(".page3 h1",{
    y:1000,
    stagger:.5,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".page3",
        start:"top 40%",
        // scrub:3
    }
})
gsap.from(".page4 .boximg,.page4 h1, .page4 p",{
    y:1000,
    stagger:.5,
    opacity:0,
    scrollTrigger:{
        scroller:"body",
        trigger:".page3",
        start:"top 40%",
        
        // scrub:3
    }
})

const lenis = new Lenis()

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 500)
})

gsap.ticker.lagSmoothing(0)