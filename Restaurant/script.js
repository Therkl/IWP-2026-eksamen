// =============================================
// b) LUCKY DISCOUNT SPINNER
// =============================================

// Grab the button and result paragraph from the HTML using their IDs
const spinBtn = document.getElementById('spinBtn');
const spinResult = document.getElementById('spinResult');

// Listen for a click on the spin button
spinBtn.addEventListener('click', function() {

    // Disable the button so the user can't click it multiple times while spinning
    spinBtn.disabled = true;

    // Show "Spinning..." text while the user waits
    spinResult.textContent = "Spinning...";

    // Remove any CSS class from a previous spin (e.g. green/red color)
    spinResult.className = "";

    // Wait 10 seconds before showing the result (simulates a spinning animation)
    setTimeout(() => {

        // Math.random() returns a random decimal between 0 and 1
        const randomChance = Math.random();

        if (randomChance < 0.25) {
            // 25% chance: user wins a discount
            // Set the text to the winning message
            spinResult.textContent = "Congratulations! You won a 20% discount coupon! Use code: LUCKY20";
            // Apply green CSS class (defined in style.css)
            spinResult.className = "success-message";
        } else {
            // 75% chance: user loses
            spinResult.textContent = "Better luck next time! Try again later.";
            // Apply gray/red CSS class (defined in style.css)
            spinResult.className = "fail-message";
        }

        // Re-enable the button so the user can try again
        spinBtn.disabled = false;

    }, 10000); // 10000 milliseconds = 10 seconds
});


// =============================================
// c) WEEKLY SPECIAL LOADER
// =============================================

// Grab the button and the container div from the HTML
const loadSpecialBtn = document.getElementById('loadSpecialBtn');
const specialContainer = document.getElementById('specialContainer');

// These arrays map the day number (0-6) from Date().getDay() to:
// - fileName: the JSON file to fetch e.g. "friday.json"
// - displayDay: the human-readable name to show on screen e.g. "Friday"
const daysMap = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const displayDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Listen for a click on the "Load Today's Special" button
loadSpecialBtn.addEventListener('click', function() {

    // Disable the button immediately — it should only work once per page load
    loadSpecialBtn.disabled = true;

    // Get today's day as a number: 0=Sunday, 1=Monday, ..., 6=Saturday
    const currentDayIndex = new Date().getDay();

    // Use the index to look up the file name and display name
    const fileName = daysMap[currentDayIndex];   // e.g. "friday"
    const displayDay = displayDays[currentDayIndex]; // e.g. "Friday"

    // Fetch the JSON file for today from the specials/ folder
    // fetch() is asynchronous — it runs in the background and uses .then() when done
    fetch(`specials/${fileName}.json`)
        .then(response => {
            // Check if the file was found (HTTP 200 OK)
            // If not (e.g. 404), throw an error to jump to .catch()
            if (!response.ok) {
                throw new Error("File missing");
            }
            // Parse the response as JSON and pass it to the next .then()
            return response.json();
        })
        .then(data => {
            // data now contains the JSON object e.g. { name, price, description, chef_note }

            // Make the container visible (it's hidden by default)
            specialContainer.style.display = "block";

            // Inject the special's details into the container using a template literal
            // Template literals use backticks and ${} to insert variables into strings
            specialContainer.innerHTML = `
                <p><strong>Today's Special (${displayDay}):</strong></p>
                <p><strong>${data.name} - EUR ${data.price}</strong></p>
                <p>${data.description}</p>
                <p><em>${data.chef_note}</em></p>
            `;
        })
        .catch(error => {
            // If the fetch failed (file missing or network error), show an error message
            specialContainer.style.display = "block";
            specialContainer.innerHTML = `<p class="fail-message">No special available for today!</p>`;
        });
});