const passwordBox =document.getElementById("password");
const length = 12;
const upperCase = "ABCDEFGHJIKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890"
const symbol = "!@#$%^&*()_+{}[]|\<>?/=-"
const allChars = upperCase+ lowerCase + number + symbol ;
function createPassword(){
    let password = "";
    console.log("hello")
    // Adding a character from each character set
    password += upperCase[Math.floor(Math.random()* upperCase.length)];
    password += lowerCase[Math.floor(Math.random()* upperCase.length)];
    password += number[Math.floor(Math.random()* upperCase.length)];
    password += symbol[Math.floor(Math.random()* upperCase.length)];

    // Filling the remaining password length with random characters
    while (length > password.length){
        password +=allChars [Math.floor(Math.random() * allChars .length)];
    }

    // Displaying the password in the passwordBox
    passwordBox.value = password;
    console.log(password)
}
// Define the copyPassword function
function copyPassWord(){
    // Select the password from the input field
    passwordBox.select();
    // Copy the selected password to the clipboard
    document.execCommand('copy');
}