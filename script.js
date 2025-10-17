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
      navbarWrapper.style.top = "-160px"; // hide
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

// --- AUTO CLOSE MENU ON LINK CLICK ---
const navLinkItems = document.querySelectorAll("#nav-links a");

navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

  
/*
// --- ZONE BUTTON TOGGLE (smooth expand/collapse + active highlight) ---
const zoneButtons = document.querySelectorAll(".zone-btn");
const zoneInfos = document.querySelectorAll(".zone-info");

zoneButtons.forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.zone);

    // If the clicked zone is already open → close it
    if (target.classList.contains("active")) {
      target.classList.remove("active");
      button.classList.remove("active");
      return;
    }

    // Close all zones & remove active highlight from buttons
    zoneInfos.forEach(zone => zone.classList.remove("active"));
    zoneButtons.forEach(btn => btn.classList.remove("active"));

    // Open the selected zone and highlight its button
    target.classList.add("active");
    button.classList.add("active");

    // Smooth scroll to the button itself (instead of zone info) with offset
    const offset = 100; // adjust based on navbar height
    setTimeout(() => {
      const topPos = button.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: topPos, behavior: "smooth" });
    }, 30);
  });
});
*/
