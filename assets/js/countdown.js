// Set the launch date (August 15, 2025, 12:00 PM)
// Using a simpler date string for better browser compatibility.
// This will interpret 12:00 PM in the user's local timezone.
const launchDate = new Date("Aug 31, 2025 23:59:00").getTime();

// Ensure the DOM is fully loaded before trying to access elements
document.addEventListener('DOMContentLoaded', (event) => {

    const countdownContainer = document.getElementById("countdown");
    const daysSpan = document.getElementById("days");
    const hoursSpan = document.getElementById("hours");
    const minutesSpan = document.getElementById("minutes");
    const secondsSpan = document.getElementById("seconds");

    // Function to update the countdown
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = launchDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the elements, padding with leading zeros if necessary
        if (daysSpan && hoursSpan && minutesSpan && secondsSpan) { // Check if elements exist
            daysSpan.innerHTML = String(days).padStart(2, '0');
            hoursSpan.innerHTML = String(hours).padStart(2, '0');
            minutesSpan.innerHTML = String(minutes).padStart(2, '0');
            secondsSpan.innerHTML = String(seconds).padStart(2, '0');
        }

        // If the countdown is finished
        if (distance < 0) {
            clearInterval(countdownFunctionInterval); // Clear the interval
            if (countdownContainer) {
                countdownContainer.innerHTML = "<p class='text-2xl text-primary-dark font-bold'>SpecLynx OpenAPI Toolkit is now available!</p>";
            }
        }
    }

    // Run the countdown immediately on load, then every second
    updateCountdown(); // Initial call
    const countdownFunctionInterval = setInterval(updateCountdown, 1000);
});