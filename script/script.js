let movablenavBar = document.querySelector(".movablenavBar");
let sticky = movablenavBar.offsetTop;

window.onscroll = function () {
  navbarfunc();
};

function navbarfunc() {
  if (window.scrollY > sticky) {
    movablenavBar.classList.add("sticky");
  } else {
    movablenavBar.classList.remove("sticky");
  }
}
