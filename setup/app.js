const allbtn = document.querySelectorAll(".btn");

const alltext = document.querySelectorAll(".text");
const aboutInfo = document.querySelector(".about-info");

aboutInfo.addEventListener("click", function (e) {
  const clickedbtn = e.target.dataset.id;
  console.log(clickedbtn);
  if (clickedbtn) {
    allbtn.forEach(function (item) {
      item.classList.remove("btn-color");
      e.target.classList.add("btn-color");
    });
    alltext.forEach(function (item) {
      item.classList.remove("active");
      if (item.classList.contains(`${clickedbtn}`)) {
        item.classList.add("active");
      }
    });
  }
});
