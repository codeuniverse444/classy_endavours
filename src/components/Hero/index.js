export { default } from './Hero';

function page1Animation(){
    var tl = gsap.timeline()

tl.from(".logosection img",{
    y:30,
    duration:0.6,
    opacity:0,
    stagger:0.15
})
}
