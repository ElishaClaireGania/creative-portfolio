/* ============ BACK TO TOP ============ */
document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("scrollToTop");

  // Show button after scrolling 300px
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("active");
    } else {
      scrollBtn.classList.remove("active");
    }
  });

  // Smooth Scroll back to top
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

/* ============ NAVIGATION TOGGLE ============ */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const socialLinks = document.querySelector(".social-links-permanent");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      // Both containers slide in at the same time
      navLinks.classList.toggle("active");
      socialLinks.classList.toggle("active");

      // Optional: change dot colors when opened
      menuToggle.classList.toggle("opened");
    });
  }
});
