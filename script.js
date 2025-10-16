// --- PRELOADER ---
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    preloader.style.opacity = "0";
    setTimeout(() => preloader.style.display = "none", 500);
  });
  
  // --- NAVBAR HIDE ON SCROLL ---
  let lastScrollTop = 0;
  const navbarWrapper = document.querySelector(".navbar-wrapper");
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbarWrapper.style.top = "-100px"; // hide
    } else {
      navbarWrapper.style.top = "0"; // show
    }
    lastScrollTop = scrollTop;
  });
  
  // --- FADE IN ON SCROLL ---
  const fadeElements = document.querySelectorAll(".fade-in");
  const appearOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  fadeElements.forEach((el) => appearOnScroll.observe(el));
  
  // --- HAMBURGER MENU ---
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
  
