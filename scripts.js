document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");
  const hamburgerIcon = document.getElementById("burger")
  const mobileMenu = document.getElementById("mobile-menu")
  const closeMobileIcon = document.getElementById("close-icon")

  // Mobile menu
  hamburgerIcon.addEventListener("click", function(){
    mobileMenu.classList.add("show")  
  })

  closeMobileIcon.addEventListener("click", function(){
    mobileMenu.classList.remove("show")
  })

  // Desktop menu
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
