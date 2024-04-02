function validateForm() {
  const location = document.getElementById('location');
  const guests = document.getElementById('guests');
  const startDate = document.getElementById('start');
  const endDate = document.getElementById('end');
  const description = document.getElementById('floatingTextarea');

  // Check if all fields are filled
  if (!location.value || !guests.value || !startDate.value || !endDate.value || !description.value) {
    alert('Please fill in all required fields!');
    return false;
  }

  // Check if end date is after start date
  if (new Date(endDate.value) < new Date(startDate.value)) {
    alert('End date must be after start date.');
    return false;
  }

  // All validation passed, prevent default form submission and show success message
  event.preventDefault(); // Prevent default form submission
  alert('Booking successful!');
  return false; // Not necessary to return true here, form submission is prevented
}
//login and signup
document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validation
    var firstName = document.getElementById("firstname").value.trim();
    var lastName = document.getElementById("lastname").value.trim();
    var contact = document.getElementById("contact").value.trim();
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;

    // Regular expressions for validation
    var phoneRegex = /^\d{10}$/; // Change this regex according to your phone number format
    var emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

    var passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;

    // Validation checks
    var errors = [];

    if (!firstName) {
      errors.push("First name is required.");
    }

    if (!lastName) {
      errors.push("Last name is required.");
    }

    if (!contact.match(phoneRegex)) {
      errors.push("Contact number is invalid.");
    }

    if (!email.match(emailRegex)) {
      errors.push("Email address is invalid.");
    }

    if (!password.match(passwordRegex)) {
      errors.push(
        "Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters."
      );
    }

    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    if (!dob) {
      errors.push("Date of birth is required.");
    } else {
      // Check if the user is at least 18 years old
      var dobDate = new Date(dob);
      var currentDate = new Date();
      var minAgeDate = new Date();
      minAgeDate.setFullYear(currentDate.getFullYear() - 18);
      if (dobDate > minAgeDate) {
        errors.push("You must be at least 18 years old to register.");
      }
    }

    if (!gender) {
      errors.push("Gender is required.");
    }
    // Check if there are any errors
    if (errors.length > 0) {
      // Display errors
      alert(errors.join("\n"));
    } else {
      // If no errors, registration successful
      alert("Registration successful!");
      // You can optionally submit the form here if needed
      // document.getElementById('registrationForm').submit();
    }
  });

$(document).ready(function () {
  // Define the unique email and password
  var uniqueEmail = "anr@gmail.com";
  var uniquePassword = "Password@2024";

  $("#loginForm").submit(function (e) {
    e.preventDefault();

    var email = $("#email-id").val().trim();
    var password = $("#password-id").val().trim();

    // Regular expression for email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || password === "") {
      alert("Email and password are required");
    } else if (email !== uniqueEmail) {
      alert("Email is incorrect");
    } else if (!email.match(emailPattern)) {
      alert("Please enter a valid email address");
    } else if (password.length < 6) {
      alert("Password must be at least 6 characters long");
    } else if (password !== uniquePassword) {
      alert("Incorrect password");
    } else {
      alert("Login Successful");
      // Additional actions after successful login
    }
  });
});