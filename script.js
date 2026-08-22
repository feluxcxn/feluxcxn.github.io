document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("music");
    const playBtn = document.getElementById("playBtn");
    const muteBtn = document.getElementById("muteBtn");
    const volume = document.getElementById("volume");

    if (music) music.volume = 0.5;

    // ===============================================
    // TARAYICI ENGELİNİ AŞAN İLK DOKUNMADA MÜZİK BAŞLATICI
    // ===============================================
    const startAudioOnFirstInteraction = () => {
        if (music && music.paused) {
            music.play().then(() => {
                if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            }).catch(() => {});
        }
        document.removeEventListener("click", startAudioOnFirstInteraction);
        document.removeEventListener("touchstart", startAudioOnFirstInteraction);
        document.removeEventListener("keydown", startAudioOnFirstInteraction);
    };

    document.addEventListener("click", startAudioOnFirstInteraction);
    document.addEventListener("touchstart", startAudioOnFirstInteraction);
    document.addEventListener("keydown", startAudioOnFirstInteraction);

    // ===============================================
    // LOADER & OTOMATİK GEÇİŞ SYSTEM
    // ===============================================
    let percent = 0;
    const bar = document.getElementById("loading-bar");
    const percentText = document.getElementById("loading-percent");

    const loading = setInterval(() => {
        percent++;
        if (bar) bar.style.width = percent + "%";
        if (percentText) percentText.innerHTML = percent + "%";

        if (percent >= 100) {
            clearInterval(loading);
            openSiteDirectly();
        }
    }, 20);

    function openSiteDirectly() {
        const loader = document.getElementById("loader");
        const site = document.getElementById("site");

        // Müziği Başlatmayı Dene
        if (music) {
            music.play().then(() => {
                if (playBtn) playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            }).catch(e => {
                console.log("Autoplay engeli: Kullanıcının ekrana dokunması bekleniyor.");
            });
        }

        // Loader yok et, siteyi aç
        if (loader) loader.style.opacity = "0";
        setTimeout(() => {
            if (loader) loader.style.display = "none";
            if (site) {
                site.style.display = "block";
                site.style.opacity = "1";
            }
        }, 500);
    }

    // MUSIC PANEL CONTROLS
    if (playBtn) {
        playBtn.onclick = () => {
            if (!music) return;
            if (music.paused) {
                music.play();
                playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
            } else {
                music.pause();
                playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
            }
        };
    }

    if (muteBtn) {
        muteBtn.onclick = () => {
            if (!music) return;
            music.muted = !music.muted;
            muteBtn.innerHTML = music.muted 
                ? '<i class="fa-solid fa-volume-xmark"></i>' 
                : '<i class="fa-solid fa-volume-high"></i>';
        };
    }

    if (volume) {
        volume.oninput = () => {
            if (music) music.volume = volume.value;
        };
    }

    // APPLE EMOJI HEART RAIN (ARKA PLAN YAĞMURU)
    const heartsContainer = document.getElementById("hearts");
    const appleHearts = [
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/2764-fe0f.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f497.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f495.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/2728.png"
    ];

    if (heartsContainer) {
        setInterval(() => {
            const heart = document.createElement("img");
            heart.className = "heart apple-emoji";
            heart.src = appleHearts[Math.floor(Math.random() * appleHearts.length)];
            heart.style.left = Math.random() * 100 + "vw";
            
            const size = 20 + Math.random() * 25;
            heart.style.width = size + "px";
            heart.style.height = size + "px";

            const duration = 4 + Math.random() * 4;
            heart.style.animationDuration = duration + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);
        }, 600);
    }
});

// HAYIR BUTONUNU EKRAN İÇİNDE KAÇIRMA MANTIĞI
function dodgeNo() {
    const noBtn = document.getElementById("noBtn");
    if (!noBtn) return;

    const btnWidth = noBtn.offsetWidth || 120;
    const btnHeight = noBtn.offsetHeight || 50;

    // Butonun ekrandan taşmaması için sınırları belirle
    const maxX = window.innerWidth - btnWidth - 40;
    const maxY = window.innerHeight - btnHeight - 40;

    const randomX = Math.max(20, Math.floor(Math.random() * maxX));
    const randomY = Math.max(20, Math.floor(Math.random() * maxY));

    noBtn.style.position = "fixed";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
}

function selectYes() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const result = document.getElementById("surveyResult");

    if (yesBtn) yesBtn.style.transform = "scale(1.15)";
    if (noBtn) noBtn.style.display = "none";
    if (result) result.style.display = "block";

    triggerMassiveHeartExplosion();
}

// 250+ KALP PATLAMASI (HER YÖNDEN VE SÜREKLİ)
function triggerMassiveHeartExplosion() {
    const appleHearts = [
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/2764-fe0f.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f496.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f497.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f493.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/1f495.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/2728.png",
        "https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.0.1/img/apple/64/2764-fe0f-200d-1f525.png"
    ];

    const origins = [
        { x: window.innerWidth / 2, y: window.innerHeight / 2 },
        { x: 50, y: 50 },
        { x: window.innerWidth - 50, y: 50 },
        { x: 50, y: window.innerHeight - 50 },
        { x: window.innerWidth - 50, y: window.innerHeight - 50 },
        { x: window.innerWidth / 2, y: window.innerHeight * 0.75 }
    ];

    origins.forEach(origin => {
        for (let i = 0; i < 35; i++) {
            createBurstHeart(origin.x, origin.y, appleHearts);
        }
    });

    let burstInterval = setInterval(() => {
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;
        for (let i = 0; i < 8; i++) {
            createBurstHeart(randomX, randomY, appleHearts);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(burstInterval);
    }, 3000);
}

function createBurstHeart(startX, startY, heartsArray) {
    const heart = document.createElement("img");
    heart.className = "burst-heart apple-emoji";
    heart.src = heartsArray[Math.floor(Math.random() * heartsArray.length)];

    heart.style.left = `${startX}px`;
    heart.style.top = `${startY}px`;

    const size = 22 + Math.random() * 38;
    heart.style.width = `${size}px`;
    heart.style.height = `${size}px`;

    const angle = Math.random() * Math.PI * 2;
    const distance = 180 + Math.random() * 600; 
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    const rot = (Math.random() - 0.5) * 540;
    const scale = 1 + Math.random() * 1.2;

    heart.style.setProperty("--tx", `${tx}px`);
    heart.style.setProperty("--ty", `${ty}px`);
    heart.style.setProperty("--rot", `${rot}deg`);
    heart.style.setProperty("--scale", scale);

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2200);
}

// GLOBAL GALLERY VIEWER
function openImage(src) {
    const viewer = document.getElementById("image-viewer");
    const image = document.getElementById("big-image");
    if (viewer && image) {
        image.src = src;
        viewer.style.display = "flex";
    }
}

function closeImage() {
    const viewer = document.getElementById("image-viewer");
    if (viewer) viewer.style.display = "none";
}

function scrollGallery() {
    const gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeImage();
    }
});