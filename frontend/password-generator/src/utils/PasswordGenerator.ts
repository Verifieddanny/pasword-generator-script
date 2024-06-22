function generateRandomPassword(length: number): string {
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  const allCharacters =
    uppercaseLetters + lowercaseLetters + numbers + specialCharacters;

  if (length < 4) {
    throw new Error(
      "Password length must be at least 4 characters to include all types."
    );
  }

  let password = "";

  password +=
    uppercaseLetters[Math.floor(Math.random() * uppercaseLetters.length)];
  password +=
    lowercaseLetters[Math.floor(Math.random() * lowercaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password +=
    specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

  for (let i = 4; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return shufflePassword(password);
}

function shufflePassword(password: string): string {
  const splittedPassword = password.split("");
  for (let i = splittedPassword.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [splittedPassword[i], splittedPassword[j]] = [
      splittedPassword[j],
      splittedPassword[i],
    ];
  }
  return splittedPassword.join("");
}

export { generateRandomPassword };
