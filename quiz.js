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

