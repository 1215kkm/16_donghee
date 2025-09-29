gsap.registerPlugin(ScrollTrigger);

/* [A] 히어로: 부드러운 첫 등장 + 아주 얕은 패럴랙스 */
gsap.from("#visual .centerbox img", { opacity: 0, y: 20, duration: 3, ease: "power2.out" },);
gsap.to("#visual .centerbox img", {
  yPercent: -8, ease: "none",
  scrollTrigger: { trigger: "#visual", start: "top bottom", end: "bottom top", scrub: true }
  
});

/* [B] 공통 리빌: 보일 때 1회만 재생 */
const io = new IntersectionObserver((ents)=>{
  ents.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
},{ threshold: .25 });

[
  // sec2
  ".sec2 .textbox h2", ".sec2 .textbox2 h2", ".sec2 .imgbox img",
  // sec3
  ".sec3 .link1", ".sec3 .link2", ".sec3 .link3", ".sec3 .link4",
  // sec4~6
  ".sec4 .titlebox", ".sec4 .part2 .slidebox",
  ".sec5 .titlebox", ".sec5 .part2 .slidebox",
  ".sec6 .titlebox", ".sec6 .slidebox",
  // sec8
  ".sec8 .cardbox", ".sec8 .textbox",
  // sec9
  ".sec9 .titlebox", ".sec9 .imgbox li",
  // sec10
  ".sec10 .title"
].forEach(sel=>{
  document.querySelectorAll(sel).forEach(el=>{
    el.classList.add('reveal');
    io.observe(el);
  });
});





/* [D] sec7 세로 텍스트: 순차 등장 딜레이 인덱싱 */
const sec7 = document.querySelector('.sec7');
if (sec7) {
  const spans = sec7.querySelectorAll('.part2 span');
  spans.forEach((s, idx)=> s.style.setProperty('--i', idx));
  const o2 = new IntersectionObserver((ents)=>{
    ents.forEach(e=>{
      if(e.isIntersecting){ sec7.classList.add('in'); o2.disconnect(); }
    });
  }, { threshold: .3 });
  o2.observe(sec7);
}




