function generatePassword() {
  const length = document.getElementById("myLength").value;
  const includeLowerCase = document.getElementById("lower");
  const includeUpperCase = document.getElementById("upper");
  const includeNumber = document.getElementById("num");
  const includeSymbol = document.getElementById("sym");
  const myPassword = document.getElementById("myPassword");

  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+-=";

  let allowedChars = "";
  let password = "";

  allowedChars += includeLowerCase.checked ? lowerCase : "";
  allowedChars += includeUpperCase.checked ? upperCase : "";
  allowedChars += includeNumber.checked ? numbers : "";
  allowedChars += includeSymbol.checked ? symbols : "";

  if (length < 1 || allowedChars.length === 0) {
    alert("Please enter a valid length and select at least one character type.");
    return;
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  myPassword.textContent=`Generated password: ${password}`;
}
