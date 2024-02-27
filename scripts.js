document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(function (link) {
    const id = link.getAttribute("data-menu");
    const menu = document.getElementById(id);

    link.addEventListener("click", function (event) {
      event.preventDefault();
      if (menu) {
        menu.classList.toggle("show");
        link.classList.toggle("hover");
      }
    });

    if (menu) {
      menu.addEventListener("mouseover", function () {
        if (menu) {
          menu.classList.add("show");
          link.classList.toggle("hover");
        }
      });

      menu.addEventListener("mouseout", function () {
        if (menu) {
          menu.classList.remove("show");
          link.classList.remove("hover");
        }
      });
    }
  });
});
