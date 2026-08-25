// 클릭시 show를 먼저 다 떼기,
const body = document.querySelector("body");
const nav = document.querySelectorAll(".menu");
const projectListWrap = document.querySelectorAll(".projectListWrap");

const projectFolder = document.querySelectorAll(".projectCont");
const projectPopWrap = document.querySelectorAll(".projectPopWrap");

const closeBtn = document.querySelector(".projectPopWrap.show .closeBtn");

function showHandle(button, el) {
  button.forEach((btn) => {
    const btnId = btn.dataset.id;

    // show 붙을 요소(프로젝트wrap, 상세 팝업)
    btn.addEventListener("click", () => {
      // nav menu 동작
      if (btn.classList.contains("menu")) {
        button.forEach((b) => b.classList.remove("on"));
        btn.classList.add("on");
      }
      el.forEach((el) => {
        const elId = el.dataset.id;

        el.classList.remove("show");

        // 데이터값 비교후 같은 값 보여주기
        if (btnId === elId) {
          el.classList.add("show");
          body.classList.add("noScroll");
          if (el.classList.contains("projectPopWrap")) {
            const closeBtn = el.querySelector(".closeBtn");

            closeBtn.addEventListener("click", () => {
              el.classList.remove("show");
              body.classList.remove("noScroll");
            });
          }
        }
      });
    });
  });
}
showHandle(nav, projectListWrap);
showHandle(projectFolder, projectPopWrap);

function moreBtnAnimation() {
  const moreBtns = document.querySelectorAll(".projectPopWrap .moreBtn");

  moreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const projectList = btn.closest(".projectList");

      // 열려있는지 확인
      const isOpen = projectList.classList.contains("show");

      if (!isOpen) {
        projectList.classList.add("show");
        btn.classList.add("active");
      } else {
        projectList.classList.remove("show");
        btn.classList.remove("active");
      }
    });
  });
}
moreBtnAnimation();
