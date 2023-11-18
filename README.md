# Generate-a-Random-Password
Random Password Generator
Overview
This simple JavaScript code provides a random password generation tool with customizable criteria, allowing you to create secure and diverse passwords for various applications. The generated password can be easily displayed and copied to the clipboard.

Features
Customizable Length: Set the desired length of the generated password.
Character Sets:
Uppercase Letters (A-Z)
Lowercase Letters (a-z)
Numbers (0-9)
Symbols (!@#$%^&*()_+{}[]|\<>?/=-)
Usage
Include the following HTML code in your project:

html
Copy code
<input type="text" id="password" readonly>
<button onclick="createPassword()">Generate Password</button>
<button onclick="copyPassword()">Copy Password</button>
Add the provided JavaScript code to your project. Customize the length and character sets as needed.

When the "Generate Password" button is clicked, a random password meeting the specified criteria will be displayed in the input field. Use the "Copy Password" button to copy the generated password to the clipboard.

Example
javascript
Copy code
const passwordBox = document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!@#$%^&*()_+{}[]|\\<>?/=-";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    // Adding a character from each character set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    // Filling the remaining password length with random characters
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Displaying the password in the passwordBox
    passwordBox.value = password;
}

// Define the copyPassword function
function copyPassword() {
    // Select the password from the input field
    passwordBox.select();
    // Copy the selected password to the clipboard
    document.execCommand('copy');
}
Customization
Feel free to customize the code to meet your specific password requirements. Adjust the length and character sets according to the security standards of your application.

#live demo
https://generate-a-random-password.yashjgandhieduc.repl.co/
<a href="https://generate-a-random-password.yashjgandhieduc.repl.co/">click demo</a>



