

function generatePassword() {
    let display = document.getElementById("Password");
    let length = document.getElementById("passLength").value;
    let Password = '';
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%&*~";
    let error = document.getElementById("error");
    parseInt(length);
    if (length == 0) {
        error.innerHTML = " please select the length of password! ";
        error.style.padding = "10px 15px";
        setTimeout(() => {
            error.style.visibility = "hidden";
            window.location.reload()
        }, 2000);
    }

    for (let i = 0; i < length; i++) {
        Password += characters[Math.floor(Math.random() * characters.length)];
    }
    display.value = Password;

}

function reset() {
    window.location.reload();
}
