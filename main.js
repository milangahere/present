(function () {
  const box = document.getElementById("box");
  const boxBody = document.getElementById("box-body");
  const hiddenContent = document.getElementById("hidden-content");

  box.addEventListener("click", openBox, false);

  function openBox() {
    boxBody.classList.add("box-body-hovered");
    hiddenContent.style.display = "block";

    setTimeout(function () {
      hiddenContent.classList.add("visible");

      const mobileElements = document.querySelectorAll(".xs-full-height, .xs-overflow-hidden");

      for (const element of mobileElements) {
        element.classList.remove("xs-full-height");
        element.classList.remove("xs-overflow-hidden");
      }
    }, 2000);

    box.removeEventListener("click", openBox);
  }
})();
