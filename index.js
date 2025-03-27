document.getElementById('requestDemoBtn').addEventListener('click', function() {
  document.getElementById('emailModal').style.display = 'block';
});

document.getElementById('submitEmail').addEventListener('click', function() {
  var userEmail = document.getElementById('userEmail').value;
  if (userEmail) {
      alert('Demo request submitted for ' + userEmail);
      document.getElementById('emailModal').style.display = 'none';  // Close the modal
      
      // Redirect to user.html after submission
      window.location.href = 'user.html';
  } else {
      alert('Please enter a valid email address.');
  }
});

// Cancel button functionality
document.getElementById('cancelEmail').addEventListener('click', function() {
  document.getElementById('emailModal').style.display = 'none'; // Hide modal
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector("#navbarNav");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});

