// /js/theme.js
(function () {
  const KEY = "theme";
  const root = document.documentElement;
  const prefersDark = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const stored = localStorage.getItem(KEY);
  const initial = stored || (prefersDark() ? "dark" : "light");
  root.setAttribute("data-bs-theme", initial);

  // Attach after DOM is ready if not using defer/end-of-body
  const attach = () => {
    const btn = document.getElementById("themeToggle");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const next =
        root.getAttribute("data-bs-theme") === "dark" ? "light" : "dark";
      localStorage.setItem(KEY, next);
      root.setAttribute("data-bs-theme", next);
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", attach);
  } else {
    attach();
  }

  // Optional: sync with OS if user never chose
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener?.("change", () => {
    if (!localStorage.getItem(KEY)) {
      root.setAttribute("data-bs-theme", prefersDark() ? "dark" : "light");
    }
  });
})();
