 // Calculate bill when the calculate button is clicked
 document.querySelector('.calculate-344535-0').addEventListener('click', function() {
    let units = document.querySelector('.units-344486-0').value;

    // Ensure the units input is a valid number
    units = parseFloat(units);
    if (isNaN(units) || units <= 0) {
        alert('Please enter a valid number of units.');
        return;
    }

    // Restrict the input to a maximum of 1000 units
    if (units > 1000) {
        alert('You can enter a maximum of 1000 units.');
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


document.querySelector('.logout-I3731006_132281-0').addEventListener('click', function() {
    let confirmLogout = confirm('Are you sure you want to log out?');

    if (confirmLogout) {
        // Show the flash message
        let flashMessage = document.getElementById('flash-message');
        flashMessage.style.display = 'block';

        // Wait for 2 seconds and then redirect
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const helpCenterLink = document.querySelector(".help-center-I307818_164-0");
    
    helpCenterLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Create popup container
        let popup = document.createElement("div");
        popup.id = "helpPopup";
        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100vw";
        popup.style.height = "100vh";
        popup.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
        popup.style.display = "flex";
        popup.style.alignItems = "center";
        popup.style.justifyContent = "center";
        popup.style.zIndex = "1000";
        
        popup.innerHTML = `
            <div style="background: white; padding: 20px; box-shadow: 0px 0px 10px rgba(0,0,0,0.2); border-radius: 8px; width: 300px; position: relative;">
                <h3>Help Center</h3>
                <label>Email:</label>
                <input type="email" id="helpEmail" style="width: 100%; padding: 5px; margin: 5px 0;" required>
                <label>Query:</label>
                <textarea id="helpQuery" style="width: 100%; padding: 5px; margin: 5px 0;" required></textarea>
                <button id="submitHelp" style="width: 100%; padding: 8px; background: #007bff; color: white; border: none; cursor: pointer;">Submit</button>
                <button id="closePopup" style="width: 100%; padding: 8px; margin-top: 5px; background: #dc3545; color: white; border: none; cursor: pointer;">Close</button>
            </div>
        `;
        
        document.body.appendChild(popup);
        
        // Close popup
        document.getElementById("closePopup").addEventListener("click", function () {
            document.body.removeChild(popup);
        });
        
        // Submit button event
        document.getElementById("submitHelp").addEventListener("click", function () {
            let email = document.getElementById("helpEmail").value;
            let query = document.getElementById("helpQuery").value;
            
            if (email && query) {
                alert("Your request has been submitted successfully!");
                document.body.removeChild(popup);
            } else {
                alert("Please fill out all fields.");
            }
        });
    });
});
