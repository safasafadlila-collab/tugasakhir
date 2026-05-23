document.getElementById("registerForm").addEventListener("submit", async function(e) {
    e.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const alertBox = document.getElementById("alertBox");

    alertBox.style.display = "block";
    alertBox.style.background = "#5bc0de"; 
    alertBox.innerText = "Sedang mendaftarkan akun...";

    try {
        // Mengirimkan action=register lengkap dengan username, email, dan password
        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `action=register&username=${encodeURIComponent(username)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();

        if (data.status === "success") {
            alertBox.style.background = "#5cb85c"; 
            alertBox.innerText = "Pendaftaran berhasil! Mengalihkan ke halaman Login...";
            
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        } else {
            alertBox.style.background = "#e44e4e"; 
            alertBox.innerText = data.message || "Gagal mendaftar. Nama atau email mungkin sudah dipakai.";
        }
    } catch (error) {
        alertBox.style.background = "#e44e4e";
        alertBox.innerText = "Terjadi kesalahan pada server.";
    }
});
