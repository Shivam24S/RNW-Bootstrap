const btn = document.getElementById("themeToggleBtn");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  html.setAttribute("data-bs-theme", savedTheme);
  btn.textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

btn.addEventListener("click", () => {
  const currentTheme = html.getAttribute("data-bs-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  html.setAttribute("data-bs-theme", newTheme);
  btn.textContent = newTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
  localStorage.setItem("theme", newTheme);
});
