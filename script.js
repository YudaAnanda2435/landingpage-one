const menuBtn = document.querySelector(".menu-box");
const heroContainer = document.querySelector(".hero-container");
const menuTeks = menuBtn.querySelector("p");
const footerMenuBtn = document.querySelector(".footer-mobile-menu");

function toggleMenu(open) {
  const shouldOpen = typeof open === "boolean" ? open : !heroContainer.classList.contains("nav-active");
  if (shouldOpen) {
    heroContainer.classList.add("nav-active");
    menuTeks.textContent = "Close";
    document.body.classList.add("menu-open");
  } else {
    heroContainer.classList.remove("nav-active");
    menuTeks.textContent = "Menu";
    document.body.classList.remove("menu-open");
  }
}

menuBtn.addEventListener("click", () => toggleMenu());

if (footerMenuBtn) {
  footerMenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu(true);
  });
}

// Close mobile menu when clicking any nav cell link
const mobileNavLinks = document.querySelectorAll(".master-cell .nav-cell");
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      toggleMenu(false);
    }
  });
});

// Initialize Swiper for Projects Section
const projectsSwiper = new Swiper(".projects-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  loop: false,
  navigation: {
    nextEl: ".swiper-nav-next",
    prevEl: ".swiper-nav-prev",
  },
  pagination: {
    el: ".projects-pagination",
    clickable: true,
  },
});

// Tab Switching for Services Section (Branding, Design, Marketing)
const serviceTabs = document.querySelectorAll(".service-tab");
const serviceBodies = document.querySelectorAll(".services-body");

serviceTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = tab.getAttribute("data-target");

    // Remove active state from all tabs & content panels
    serviceTabs.forEach((t) => t.classList.remove("active"));
    serviceBodies.forEach((b) => b.classList.remove("active"));

    // Activate the clicked tab and corresponding panel
    tab.classList.add("active");
    const activePanel = document.querySelector(`.services-body[data-tab="${target}"]`);
    if (activePanel) {
      activePanel.classList.add("active");
    }
  });
});

