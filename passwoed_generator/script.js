function passwordGenerator() {
    let passwordLength = parseInt(document.getElementById("length").value);
    let checkUpperCase = document.getElementById("uppercase").checked;
    let checkLowerCase = document.getElementById("lowercase").checked;
    let checkNumbers = document.getElementById("numbers").checked;
    let checkSymbols = document.getElementById("symbols").checked;
    let generatedPassword = document.getElementById("password");

    let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercase = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

    let characters = "";
    if (checkUpperCase) {
        characters += uppercase;
    }
    if (checkLowerCase) {
        characters += lowercase;
    }
    if (checkNumbers) {
        characters += numbers;
    }
    if (checkSymbols) {
        characters += symbols;
    }

    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    generatedPassword.value = password;
    UpdatePasswordStrength();
}

function copyToClipboard() {
    let copyText = document.getElementById("password");
    copyText.select();
    document.execCommand("copy");
    alert("Password copied to clipboard!");
}

function calculateStrength(password) {
    const lengthScore = (password.length >= 8) ? 1 : 0;
    const complexityScore = (/[!@#$%^&*()_+[\]{}|;:,.<>?]+/.test(password)) ? 1 : 0;
    const uppercaseScore = (/[A-Z]+/.test(password)) ? 1 : 0;
    const lowercaseScore = (/[a-z]+/.test(password)) ? 1 : 0;
    const numbersScore = (/[0-9]+/.test(password)) ? 1 : 0;
    return Math.round((lengthScore + complexityScore + uppercaseScore + lowercaseScore + numbersScore));
}

function UpdatePasswordStrength() {
    let password = document.getElementById("password").value;
    let strengthIndicator = document.getElementById("strengthIndicator");
    let score = calculateStrength(password);
    strengthIndicator.style.width = `${score * 20}%`;

    if (score <= 2) {
        strengthIndicator.style.backgroundColor = 'red';
    } else if (score <= 3) {
        strengthIndicator.style.backgroundColor = 'orange';
    } else {
        strengthIndicator.style.backgroundColor = 'green';
    }
}
