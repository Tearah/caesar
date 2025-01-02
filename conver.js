 // Function to encrypt the message
 function encrypt() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);
    let cipherText = caesarCipher(message, shift);
    document.getElementById("output").textContent = "Encrypted Message: " + cipherText;
}

// Function to decrypt the message
function decrypt() {
    let message = document.getElementById("message").value;
    let shift = parseInt(document.getElementById("shift").value);
    let originalText = caesarCipher(message, -shift); // Negative shift for decryption
    document.getElementById("output").textContent = "Decrypted Message: " + originalText;
}

// Caesar cipher function to encrypt or decrypt based on shift
function caesarCipher(str, shift) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if (char.match(/[a-z]/i)) { // Check if character is a letter
            let code = str.charCodeAt(i);
            // Shift uppercase letters
            if (char >= 'A' && char <= 'Z') {
                char = String.fromCharCode(((code - 65 + shift) % 26 + 26) % 26 + 65);
            }
            // Shift lowercase letters
            else if (char >= 'a' && char <= 'z') {
                char = String.fromCharCode(((code - 97 + shift) % 26 + 26) % 26 + 97);
            }
        }
        result += char; // Append character to result
    }
    return result;
}
