(function () {
  const box = document.getElementById("box");
  const boxBody = document.getElementById("box-body");
  const hiddenContent = document.getElementById("hidden-content");

  box.addEventListener("click", openBox, false);

  function openBox() {
    boxBody.classList.add("box-body-hovered");

    setTimeout(function () {
      hiddenContent.classList.add("visible");
    }, 2000);

    box.removeEventListener(openBox);
  }
})();
