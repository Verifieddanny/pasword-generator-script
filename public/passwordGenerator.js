"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPassword = void 0;
function generateRandomPassword(length) {
    var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    var numbers = "0123456789";
    var specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
    if (length < 4) {
        throw new Error("Password length must be at least 4 characters to include all types.");
    }
    var password = "";
    password +=
        uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
    password +=
        lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password +=
        specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
    for (var i = 4; i < length; i++) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }
    return shufflePassword(password);
}
exports.generateRandomPassword = generateRandomPassword;
function shufflePassword(password) {
    var _a;
    var splittedPassword = password.split("");
    for (var i = splittedPassword.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _a = [
            splittedPassword[j],
            splittedPassword[i],
        ], splittedPassword[i] = _a[0], splittedPassword[j] = _a[1];
    }
    return splittedPassword.join("");
}
