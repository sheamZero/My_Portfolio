document.addEventListener("DOMContentLoaded", () => {
  const rows = document.querySelectorAll(".skillRow");
  const skillsSection = document.getElementById("skills");
  const progressBar = document.querySelector(".skillsProgress .bar");

  /* Animate bars when visible */
  const rowObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const row = entry.target;
          const level = row.getAttribute("data-level");
          const fill = row.querySelector(".fill");

          fill.style.width = level + "%";
          rowObserver.unobserve(row);
        }
      });
    },
    { threshold: 0.4 }
  );

  rows.forEach(row => rowObserver.observe(row));

  /* Sidebar scroll progress */
  function updateProgress() {
    const rect = skillsSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const sectionHeight = rect.height;
    const visible = Math.min(
      Math.max(windowHeight - rect.top, 0),
      sectionHeight
    );

    const progress = visible / sectionHeight;
    progressBar.style.height = (progress * 100) + "%";
  }

  window.addEventListener("scroll", updateProgress);
  window.addEventListener("resize", updateProgress);
  updateProgress();
});
