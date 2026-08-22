document.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-toggle');
    const icon = musicBtn.querySelector('i');

    let isPlaying = false;

    // Müzik Aç / Kapat Fonksiyonu
    function toggleMusic() {
        if (isPlaying) {
            music.pause();
            musicBtn.classList.remove('playing');
            icon.className = 'fa-solid fa-music';
        } else {
            music.play().then(() => {
                musicBtn.classList.add('playing');
                icon.className = 'fa-solid fa-pause';
            }).catch(err => {
                console.log("Müzik çalma engellendi veya dosya bulunamadı:", err);
            });
        }
        isPlaying = !isPlaying;
    }

    musicBtn.addEventListener('click', toggleMusic);

    // Kullanıcı sayfada ilk tıklamayı yaptığında müziği otomatik başlatma (Tarayıcı kısıtlamaları için)
    const handleFirstInteraction = () => {
        if (!isPlaying) {
            toggleMusic();
        }
        document.removeEventListener('click', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
});
