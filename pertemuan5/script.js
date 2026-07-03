const body = document.body;
const btnToggle = document.getElementById("btnToggle");
const savedDarkMode = localStorage.getItem("darkMode");

if (savedDarkMode === "true") {
    body.classList.add("dark");
    btnToggle.textContent = "☀️ Light Mode";
} else {
    body.classList.remove("dark");
    btnToggle.textContent = "🌙 Dark Mode";
}
btnToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("darkMode", isDark);
    btnToggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
});