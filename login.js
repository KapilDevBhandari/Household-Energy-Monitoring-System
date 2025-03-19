document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login-link").addEventListener("click", function (event) {
        event.preventDefault(); // Prevent direct navigation

        // Get user inputs
        let email = document.querySelector(".rectangle-17-2671271").value;
        let password = document.querySelector(".rectangle-18-307701").value;

        // Correct credentials
        const correctEmail = "karry@gmail.com";
        const correctPassword = "karry9868#";

        // Validate input
        if (email === correctEmail && password === correctPassword) {
            // Create a flash message container
            let flashMessage = document.createElement("div");
            flashMessage.className = "flash-message";
            document.body.appendChild(flashMessage);

            // Style the flash message container
            flashMessage.style.position = "fixed";
            flashMessage.style.top = "10px";
            flashMessage.style.left = "50%";
            flashMessage.style.transform = "translateX(-50%)";
            flashMessage.style.backgroundColor = "#007bff"; // Blue background
            flashMessage.style.color = "#fff";
            flashMessage.style.padding = "10px 20px";
            flashMessage.style.borderRadius = "5px";
            flashMessage.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
            flashMessage.style.zIndex = "1000";
            flashMessage.style.fontSize = "16px";
            flashMessage.style.display = "flex";
            flashMessage.style.alignItems = "center";
            flashMessage.style.gap = "10px";

            // Create a loading animation (spinner)
            let loadingSpinner = document.createElement("div");
            loadingSpinner.className = "loading-spinner";
            loadingSpinner.style.width = "16px";
            loadingSpinner.style.height = "16px";
            loadingSpinner.style.border = "3px solid white";
            loadingSpinner.style.borderTop = "3px solid transparent";
            loadingSpinner.style.borderRadius = "50%";
            loadingSpinner.style.animation = "spin 1s linear infinite";

            // Append the spinner and message text
            flashMessage.appendChild(loadingSpinner);
            flashMessage.appendChild(document.createTextNode("Logging in..."));

            // Add CSS animation for the spinner
            let styleSheet = document.createElement("style");
            styleSheet.innerHTML = `
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(styleSheet);

            // Show "Logging in..." for 2 seconds
            setTimeout(function () {
                flashMessage.innerHTML = "Login successful!"; // Replace loading with success message
                flashMessage.style.backgroundColor = "#28a745"; // Green background

                // After 1 second, remove the flash message and redirect
                setTimeout(function () {
                    flashMessage.remove();
                    window.location.href = "./user.html";
                }, 1000);
            }, 2000);
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});

// Function to show the alert message for forgot password
function showAlert() {
    alert("Please contact your administrator to reset your password.");
}
