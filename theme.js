// ======== Theme Toggle ========

// Select the button from HTML (must exist in each page)
const themeBtn = document.querySelector(".theme-btn");

if (themeBtn) {
  // Check saved theme
  if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-theme");
    themeBtn.innerHTML = `<i class='bx bx-sun'></i>`;
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");

    if (document.body.classList.contains("light-theme")) {
      themeBtn.innerHTML = `<i class='bx bx-sun'></i>`;
      localStorage.setItem("theme", "light");
    } else {
      themeBtn.innerHTML = `<i class='bx bx-moon'></i>`;
      localStorage.setItem("theme", "dark");
    }
  });
}
