document.addEventListener("DOMContentLoaded", function () {
    const signupLink = document.querySelector(".signup-link"); // Selecting by class
  
    if (signupLink) {
      signupLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent immediate navigation
        alert("You are signed up! Now login to use the functions.");
        window.location.href = "./login.html"; // Redirect after alert
      });
    }
  });
  