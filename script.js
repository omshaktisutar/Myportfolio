const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "🌙" : "☀️";
});
