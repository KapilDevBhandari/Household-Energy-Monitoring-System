// Logout functionality
document.querySelector('.logout-I3731006_132281-0').addEventListener('click', function() {
    // Show the logout success message
    alert('You have successfully logged out.');

    // Redirect to index.html
    window.location.href = 'index.html';
});

// Function to handle the selection of answers
function handleSelection(event) {
    const question = event.target.name; // get the name of the selected radio group
    const selectedOption = event.target.value;
    console.log(`Question: ${question}, Selected Option: ${selectedOption}`);
  }
  
  // Attach event listeners to the radio buttons for the third question
  const radioButtons3 = document.querySelectorAll('input[name="renewable-source"]');
  radioButtons3.forEach(radio => {
    radio.addEventListener('change', handleSelection);
  });
  
  // Attach event listeners to the radio buttons for the fourth question
  const radioButtons4 = document.querySelectorAll('input[name="renewable-energy-country"]');
  radioButtons4.forEach(radio => {
    radio.addEventListener('change', handleSelection);
  });
  
 // Function to display the pop-up and handle redirection
function submitQuiz() {
    // Display the pop-up message
    const isConfirmed = window.confirm("Quiz submitted! Wait a second. You will be redirected to leaderboard.");
  
    // If the user clicks "OK" (confirm), redirect to the leaderboard page
    if (isConfirmed) {
      window.location.href = 'leaderboard.html';  // Replace with your leaderboard URL
    }
  }
  