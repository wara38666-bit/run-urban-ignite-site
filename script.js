async function loadComponent(targetId, filePath) {
  const target = document.getElementById(targetId);
  if (!target) return;

  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const html = await response.text();
    target.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

async function initLayout() {
  await loadComponent("header-placeholder", "components/header.html");
  await loadComponent("footer-placeholder", "components/footer.html");

  initHeaderBehavior();
  initReveal();
  initParallax();
  initActiveLinks();
}

function initHeaderBehavior() {
  const header = document.querySelector(".site-header");
  const menuToggle = document.querySelector(".menu-toggle");
  const navWrap = document.querySelector(".nav-wrap");
  const navLinks = document.querySelectorAll(".main-nav a, .header-cta a");

  if (!header) return;

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  handleScroll();
  window.addEventListener("scroll", handleScroll);

  if (menuToggle && navWrap) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navWrap.classList.toggle("open");
      menuToggle.classList.toggle("active", isOpen);
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navWrap.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 840) {
        navWrap.classList.remove("open");
        menuToggle.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      }
    });
  }
}

function initReveal() {
  const items = document.querySelectorAll(".reveal");

  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  items.forEach((item) => observer.observe(item));
}

function initParallax() {
  const heroVideo = document.querySelector(".hero-video");
  const glow1 = document.querySelector(".hero-glow-1");
  const glow2 = document.querySelector(".hero-glow-2");

  function updateParallax() {
    const y = window.scrollY;

    if (heroVideo) {
      heroVideo.style.transform = `translateY(${y * 0.14}px) scale(1.04)`;
    }

    if (glow1) {
      glow1.style.transform = `translateY(${y * 0.1}px)`;
    }

    if (glow2) {
      glow2.style.transform = `translateY(${y * 0.06}px)`;
    }
  }

  updateParallax();
  window.addEventListener("scroll", updateParallax, { passive: true });
}

function initActiveLinks() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a[href^='#']");

  if (!sections.length || !navLinks.length) return;

  function setActiveLink() {
    let currentId = "";

    sections.forEach((section) => {
      const top = section.offsetTop - 140;
      const height = section.offsetHeight;

      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${currentId}`
      );
    });
  }

  setActiveLink();
  window.addEventListener("scroll", setActiveLink, { passive: true });
}

document.addEventListener("DOMContentLoaded", initLayout);