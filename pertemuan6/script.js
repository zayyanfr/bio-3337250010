// DARK MODE
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

// FAKTA KUCING
const isiFakta   = document.querySelector("#isi-fakta");
const btnRefresh = document.querySelector("#btnRefresh");

async function ambilFakta() {
  isiFakta.textContent = "⏳ Memuat fakta...";

  try {
    const response = await fetch("https://catfact.ninja/fact");
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    const data = await response.json();

    isiFakta.textContent = data.fact;

  } catch (error) {
    isiFakta.textContent = "⚠️ Gagal memuat fakta. Cek koneksi internet Anda.";
    console.error("Error:", error.message);
  }
}

ambilFakta();

btnRefresh.addEventListener("click", ambilFakta);


// PANGGIL FUNGSI AMBIL FAKTA
const koleksiFakta = [];

async function ambilDanSimpan() {
    try {
        const response = await fetch("https://catfact.ninja/fact");
        const data = await response.json();
        
        koleksiFakta.push(data.fact);

        const ul = document.querySelector("#daftar-fakta");
        
        ul.innerHTML = koleksiFakta
            .map(fakta => `<li>${fakta}</li>`)
            .join("");
            
    } catch (error) {
        console.error("Gagal mengambil data fakta:", error);
    }
}