// const collapsibles = document.querySelectorAll(".collapsible");
// if (window.innerWidth < 768) {
//   collapsibles.forEach((item) =>
//     item.addEventListener("click", function () {
//       this.classList.toggle("collapsible-expanded");
//     })
//   );
// }

const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible-expanded");
  })
);
