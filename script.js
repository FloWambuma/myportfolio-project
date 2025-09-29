// ======== Resume Tabs (if you add buttons for switching sections) ========
const resumeBtns = document.querySelectorAll('.resume-btn');
const resumeDetails = document.querySelectorAll('.resume-detail');

if (resumeBtns.length) {
  resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      resumeBtns.forEach(b => b.classList.remove('active'));
      resumeDetails.forEach(d => d.classList.remove('active'));

      btn.classList.add('active');
      resumeDetails[idx].classList.add('active');
    });
  });
}

// ======== Smooth Scroll for Navigation ========
document.querySelectorAll("header nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ======== Mobile Menu Toggle (optional if you want hamburger menu later) ========
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("header nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}
