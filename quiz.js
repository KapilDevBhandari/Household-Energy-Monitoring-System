// Logout functionality
document.querySelector('.logout-I3731006_132281-0').addEventListener('click', function() {
  // Show the logout success message
  alert('You have successfully logged out.');

  // Redirect to index.html
  window.location.href = 'index.html';
});

// JavaScript to show the selected option for each question

// Function to handle the selection of answers
function handleSelection(event) {
  const question = event.target.name; // get the name of the selected radio group
  const selectedOption = event.target.value;
  console.log(`Question: ${question}, Selected Option: ${selectedOption}`);
}

// Attach event listeners to the radio buttons
const radioButtons1 = document.querySelectorAll('input[name="energy-source"]');
const radioButtons2 = document.querySelectorAll('input[name="energy-sector"]');

// Add event listeners for the first question
radioButtons1.forEach(radio => {
  radio.addEventListener('change', handleSelection);
});

// Add event listeners for the second question
radioButtons2.forEach(radio => {
  radio.addEventListener('change', handleSelection);
});
