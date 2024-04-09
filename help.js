const collapsibles = document.querySelectorAll(".collapsible");

collapsibles.forEach((collapsible) => {
  collapsible.addEventListener("click", function () {
    const content = this.nextElementSibling;
    content.classList.toggle("active");
  });
});
