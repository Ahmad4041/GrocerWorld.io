 // Form validation on button click
 document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    // Get form inputs
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();

    // Validation flags
    let isValid = true;

    // Validate name (min 3 characters)
    if (fullName.length < 3) {
      document.getElementById('nameAlert').classList.remove('d-none');
      isValid = false;
    } else {
      document.getElementById('nameAlert').classList.add('d-none');
    }

    // Validate email using regex
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      document.getElementById('emailAlert').classList.remove('d-none');
      isValid = false;
    } else {
      document.getElementById('emailAlert').classList.add('d-none');
    }

    // If both are valid, alert success message
    if (isValid) {
      alert('Form submitted successfully!');
    }
  });