function validateLogin() {
    // Ambil nilai dari input email dan password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var errorMessage = document.getElementById("errorMessage");

    // Validasi email dan password
    if (!validateEmail(email)) {
        errorMessage.textContent = "Email tidak valid.";
        return false;
    }

    if (password.length < 6) {
        errorMessage.textContent = "Password harus terdiri dari minimal 6 karakter.";
        return false;
    }

    // Jika validasi berhasil, kirim form (di sini Anda dapat menambahkan logika pengiriman form)
    errorMessage.textContent = "";
    alert("Login berhasil!");
    return true;
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
