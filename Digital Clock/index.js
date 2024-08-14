function updateClock() {
	const now = new Date(); // Date object

	let hours = now.getHours(); // Current hour
	const meridian = hours >= 12 ? "PM" : "AM"; // Check for morning or afternoon
	hours = hours % 12 || 12; // Produces hour values between 0 or 1 to 12

	// Add zeroes to single digit time values
	hours = hours.toString().padStart(2, 0);
	const minutes = now.getMinutes().toString().padStart(2, 0);
	const seconds = now.getSeconds().toString().padStart(2, 0);

	// Prepare time string for clock
	const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
	document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);