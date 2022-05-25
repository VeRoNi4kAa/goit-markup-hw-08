(() => {
    const refs = {
      openMenulBtn: document.querySelector(".mobile-btn"),
      closeMenuBtn: document.querySelector(".menu-btn-exit"),
      modal: document.querySelector(".mob-menu"),
      body: document.querySelector("body"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
    }
  })();