function validateEmail(email) {
  const emailRegex =
    /^(?=.{1,254}$)[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email);
}

// Test the function
const email1 = "lucas.gelenski@gmail.com"; // Valid email
const email2 = "invalid-email.com"; // Invalid email
const email3 = "user@domain.co.uk"; // Valid email
const email4 = "user@domain"; // Invalid email
const email5 = "user123@example"; // Invalid email
const email6 = "user@example..com"; // Invalid email

console.log(validateEmail(email1)); // true
console.log(validateEmail(email2)); // false
console.log(validateEmail(email3)); // true
console.log(validateEmail(email4)); // false
console.log(validateEmail(email5)); // false
console.log(validateEmail(email6)); // false
