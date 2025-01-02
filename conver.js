// Function to encrypt the message
function encrypt() {
    let message = document.getElementById("message").value.trim();
    let shift = parseInt(document.getElementById("shift").value);

    if (!message) {
        alert("Please enter a message to encrypt.");
        return;
    }
    if (isNaN(shift)) {
        alert("Please enter a valid shift value.");
        return;
    }

    let cipherText = caesarCipher(message, shift);
    document.getElementById("output").value = "" + cipherText;
}

// Function to decrypt the message
function decrypt() {
    let message = document.getElementById("message").value.trim();
    let shift = parseInt(document.getElementById("shift").value);

    if (!message) {
        alert("Please enter a message to decrypt.");
        return;
    }
    if (isNaN(shift)) {
        alert("Please enter a valid shift value.");
        return;
    }

    let originalText = caesarCipher(message, -shift); // Negative shift for decryption
    document.getElementById("output").value = "" + originalText;
}

// Caesar cipher function to encrypt or decrypt based on shift
function caesarCipher(str, shift) {
    shift = (shift % 26 + 26) % 26; // Ensure shift is within valid range
    let result = '';

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        if (char.match(/[a-z]/i)) { // Check if character is a letter
            let code = str.charCodeAt(i);

            // Shift uppercase letters
            if (char >= 'A' && char <= 'Z') {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            }
            // Shift lowercase letters
            else if (char >= 'a' && char <= 'z') {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }

        result += char; // Append character to result
    }

    return result;
}
