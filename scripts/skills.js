  document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".skillRow");

    rows.forEach(row => {
      const level = row.getAttribute("data-level");
      const fill = row.querySelector(".fill");

      setTimeout(() => {
        fill.style.width = level + "%";
      }, 300);
    });
  });