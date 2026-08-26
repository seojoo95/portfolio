function pageAnimation() {
  const body = document.querySelector("body");
  const split = new SplitText(".introTit", { type: "chars" });
  const chars = split.chars;

  if (window.scrollY === 0) {
    chars.forEach((char) => {
      gsap.fromTo(
        char,
        {
          //처음 부터 흩어져 있는 시작 위치
          x: gsap.utils.random(-550, 550),
          y: gsap.utils.random(-600, 600),
          rotation: gsap.utils.random(-20, 20),
        },
        {
          //흩어진 상태에서 둥둥 떠다니는 애니메이션
          x: "random(-550, 550)",
          y: "random(-700, 700)",
          rotation: "random(-20, 20)",
          duration: "random(3, 7)",
          ease: "power4.in",
          repeat: -1,
          yoyo: true,
        },
      );
    });
  }

  gsap.delayedCall(4, () => {
    gsap.killTweensOf(chars);

    // 제자리 정렬
    gsap.to(chars, {
      x: 0,
      y: 0,
      rotation: 0,
      duration: 2,
    });
  });
}

function sectionScroll() {
  ScrollTrigger.matchMedia({
    "(min-width: 1400px) and (min-height:800px)": function () {
      const sections = gsap.utils.toArray(".section");
      const introWrap = document.querySelector(".section.introduceWrap");

      ScrollTrigger.create({
        trigger: introWrap,
        start: "top 40%",

        onUpdate: () => {
          progress();
        },

        onLeaveBack: () => {
          progressReset();
        },
      });

      sections.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          pinSpacing: false,
        });
      });
    },
  });
}

function progress() {
  const progressBars = document.querySelectorAll(".grahp .progress");

  progressBars.forEach((bar) => {
    const percent = bar.dataset.percent;
    bar.style.width = `${percent}%`;
  });
}

function progressReset() {
  const progressBars = document.querySelectorAll(".grahp .progress");

  progressBars.forEach((bar) => {
    bar.style.width = "0%";
  });
}
progress();
sectionScroll();
pageAnimation();
