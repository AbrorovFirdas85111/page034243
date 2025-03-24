// Sahifa yuklanganda ishlaydigan animatsiya funksiyasi
window.addEventListener('load', () => {
    const element = document.querySelector('.fade-in');
    setTimeout(() => {
        element.classList.add('visible'); // 1 soniyadan keyin ko‘rinadi
    }, 100);
});

// Tugma bosilganda ishlaydigan interaktiv funksiya
document.getElementById('actionBtn').addEventListener('click', () => {
    alert('Siz tugmani bosdingiz! Bu yerda istalgan harakatni qo‘shishingiz mumkin.');
});

// Sahifani yuqoriga qaytarish uchun navigatsiya funksiyasi
const scrollBtn = document.getElementById('scrollBtn');

window.addEventListener('scroll', () => {
    // Agar sahifa 100px dan ko‘p pastga aylantirilsa, tugma ko‘rinadi
    if (window.scrollY > 100) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Silliq yuqoriga qaytish
    });
});