document.addEventListener("DOMContentLoaded", function() {
    const jokeText = document.getElementById("joke-text");
    const jokeButton = document.getElementById("joke-button");

    // Function to fetch a joke from an API (e.g., "https://icanhazdadjoke.com/api")
    async function fetchJoke() {
        try {
            const response = await fetch("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            });
            const data = await response.json();
            return data.joke; // Assuming the API response has a 'joke' field
        } catch (error) {
            console.error("Error fetching joke:", error);
            return "Failed to fetch joke";
        }
    }

    // Function to update the joke text in the display card
    async function updateJoke() {
        const joke = await fetchJoke();
        jokeText.textContent = joke;
    }

    // Event listener for the "Get Joke" button click
    jokeButton.addEventListener("click", updateJoke);

    // Initial joke fetch when the page loads
    updateJoke();
});
