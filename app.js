

const panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove("active");
  });
}
/*
// "panel" class'ına sahip tüm elementleri seçiyoruz
const panels = document.querySelectorAll(".panel");

// Seçilen her bir panel için bir döngü oluşturuyoruz

panels.forEach(panel => {
  // Her panel için bir "click" event listener ekliyoruz
  panel.addEventListener("click", () => {
    // Tıklanan panele "active" sınıfını eklemek için bu fonksiyonu çağırıyoruz
    removeActiveClasses(); // Önce diğer panellerden "active" sınıfını kaldırıyoruz
    panel.classList.add("active"); // Tıklanan paneli "active" olarak işaretliyoruz
  });
});



// "active" sınıfını kaldırmak için bir fonksiyon tanımlıyoruz

function removeActiveClasses() {
  // Tüm paneller için bir döngü oluşturuyoruz
  panels.forEach(panel => {
    // Her panelin üzerinde "active" sınıfını kaldırıyoruz
    panel.classList.remove("active");
  });
}
*/