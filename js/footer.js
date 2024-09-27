document.getElementById('signInBtn').addEventListener('click', function() {
    const emailInput = document.getElementById('emailInput');
    const alertBox = document.getElementById('alertBox');
    const progressAlert = document.getElementById('progressAlert');
    
    // Clear alerts
    alertBox.classList.add('d-none');
    progressAlert.classList.add('d-none');

    // Email validation
    const emailValue = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex

    if (!emailPattern.test(emailValue)) {
      // Show alert if email is invalid
      alertBox.classList.remove('d-none');
    } else {
      // Show progress message if email is valid
      progressAlert.classList.remove('d-none');
    }
  });