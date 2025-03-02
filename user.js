 // Calculate bill when the calculate button is clicked
 document.querySelector('.calculate-344535-0').addEventListener('click', function() {
    let units = document.querySelector('.units-344486-0').value;

    // Ensure the units input is a valid number
    units = parseFloat(units);
    if (isNaN(units) || units <= 0) {
        alert('Please enter a valid number of units.');
        return;
    }

    let rate;
    
    // Set the rate based on the number of units
    if (units <= 200) {
        rate = 12;  // Rate for units <= 200
    } else {
        rate = 15;  // Rate for units > 200
    }

    // Calculate the total cost
    let totalCost = units * rate;

    // Display the total cost in an alert
    alert('Your energy bill is: Rs. ' + totalCost);
});

// Logout functionality
document.querySelector('.logout-I3731006_132281-0').addEventListener('click', function() {
    // Show the logout success message
    alert('You have successfully logged out.');

    // Redirect to index.html
    window.location.href = 'index.html';
});