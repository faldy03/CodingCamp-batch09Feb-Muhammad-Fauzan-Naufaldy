// Greeting Name 
let userName = prompt("Masukkan Nama Anda:");
if (userName) {
    document.getElementById("welcome").innerText = `Hi ${userName}, Welcome To Website`;
}

// Form Validation & Show Result 
document.getElementById("messageForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("messageText").value;

    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Semua field wajib diisi!");
        return;
    }

    let resultText = `
        Name: ${name} <br>
        Email: ${email} <br>
        Phone: ${phone} <br>
        Message: ${message}
    `;

    document.getElementById("resultData").innerHTML = resultText;
});
