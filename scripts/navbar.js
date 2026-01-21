const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeSidebar");

// Open sidebar
menuBtn.addEventListener("click", () => {
  sidebar.classList.add("active");
});

// Close sidebar via close button
closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("active");
});

// Close sidebar when clicking on a link
sidebar.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("active");
  });
});

// Close sidebar when clicking outside of it
document.addEventListener("click", (e) => {
  if (
    sidebar.classList.contains("active") &&
    !sidebar.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    sidebar.classList.remove("active");
  }
});
