function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {

	// Character bank
	const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
	const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const numberChars = "0123456789";
	const symbolCars = "!@#$%^&*()_+-=";

	let allowedChars = "";
	let password = "";

	// Which characters to include in the password
	allowedChars += includeLowercase? lowercaseChars : "";
	allowedChars += includeUppercase? uppercaseChars : "";
	allowedChars += includeNumbers? numberChars : "";
	allowedChars += includeSymbols? symbolCars : "";

	if (length <= 0) {
		return `(Password length must be at least 1)`;
	}

	if (allowedChars.length === 0) {
		return `(At least 1 set of characters needs to be selected)`;
	}

	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * allowedChars.length); // Get a characters from the proto-password
		password += allowedChars[randomIndex];
	}

	return password;
}

const passwordLength = 12;
// Boolean values over what kinds of characters the password will contain
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength,
	includeLowercase, includeUppercase, 
	includeNumbers, includeSymbols);

console.log(`Generated Password: ${password}`);