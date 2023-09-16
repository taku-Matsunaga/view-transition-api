// // ---------------------------
// // 一覧画面から詳細画面へ
// // ---------------------------
// const buttonOpen = document.querySelector(".button-open");

// buttonOpen.addEventListener("click", () => {
//   // View Transitions APIを呼び出す
//   document.startViewTransition(() => {
//     // 遷移後のDOM構造を指定
//     document.querySelector("#view-index").hidden = true;
//     document.querySelector("#view-detail").hidden = false;
//   });
// });

// // ---------------------------
// // 詳細画面から一覧画面へ
// // ---------------------------
// const buttonClose = document.querySelector(".button-close");

// buttonClose.addEventListener("click", () => {
//   // View Transitions APIを呼び出す
//   document.startViewTransition(() => {
//     // 遷移後のDOM構造を指定
//     document.querySelector("#view-index").hidden = false;
//     document.querySelector("#view-detail").hidden = true;
//   });
// });

document.querySelectorAll(".button-open").forEach((buttonOpen) => {
  buttonOpen.addEventListener("click", (event) => {
    const contentId = event.target.dataset.content;

    // View Transitions APIを呼び出す
    document.startViewTransition(() => {
      // 遷移後のDOM構造を指定
      document.querySelector("#view-index").hidden = true;
      document.querySelectorAll(".view-detail").forEach((element) => {
        element.hidden = element.dataset.content !== contentId;
      });
    });
  });
});
document.querySelectorAll(".button-close").forEach((buttonClose) => {
  buttonClose.addEventListener("click", () => {
    // View Transitions APIを呼び出す
    document.startViewTransition(() => {
      // 遷移後のDOM構造を指定
      document.querySelector("#view-index").hidden = false;
      document.querySelectorAll(".view-detail").forEach((element) => {
        element.hidden = true;
      });
    });
  });
});