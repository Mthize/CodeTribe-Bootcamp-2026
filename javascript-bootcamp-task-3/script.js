// Fake student database used for the asynchronous example
var studentDatabase = [
  {
    id: 1,
    firstName: "Thando",
    lastName: "Mokoena",
    email: "thando.mokoena@example.com",
    course: "JavaScript Basics",
    age: 20
  },
  {
    id: 2,
    firstName: "Lerato",
    lastName: "Nkosi",
    email: "lerato.nkosi@example.com",
    course: "Web Design",
    age: 22
  },
  {
    id: 3,
    firstName: "Sipho",
    lastName: "Dlamini",
    email: "sipho.dlamini@example.com",
    course: "Front-End Development",
    age: 19
  },
  {
    id: 4,
    firstName: "Ayanda",
    lastName: "Zulu",
    email: "ayanda.zulu@example.com",
    course: "Database Fundamentals",
    age: 24
  },
  {
    id: 5,
    firstName: "Naledi",
    lastName: "Peters",
    email: "naledi.peters@example.com",
    course: "Software Testing",
    age: 21
  }
];

// These variables store the form elements
var signupForm = document.getElementById("signupForm");
var usernameInput = document.getElementById("username");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var termsCheckbox = document.getElementById("terms");
var successMessage = document.getElementById("successMessage");

// These variables store the error spans
var usernameError = document.getElementById("usernameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var termsError = document.getElementById("termsError");

// These variables store the other page elements
var resendButton = document.getElementById("resendButton");
var verificationMessage = document.getElementById("verificationMessage");
var runSyncButton = document.getElementById("runSyncButton");
var syncOutput = document.getElementById("syncOutput");
var loadStudentsButton = document.getElementById("loadStudentsButton");
var studentStatus = document.getElementById("studentStatus");
var studentOutput = document.getElementById("studentOutput");

// This pattern checks that the email is in a basic valid format
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// This function shows an error message and red border
function showError(inputElement, errorElement, message) {
  inputElement.classList.add("invalid-input");
  errorElement.textContent = message;
}

// This function clears an error message and removes the red border
function clearError(inputElement, errorElement) {
  inputElement.classList.remove("invalid-input");
  errorElement.textContent = "";
}

// This function validates the signup form
function validateSignupForm() {
  var isValid = true;

  successMessage.textContent = "";

  if (usernameInput.value.trim() === "") {
    showError(usernameInput, usernameError, "Username is required.");
    isValid = false;
  } else {
    clearError(usernameInput, usernameError);
  }

  if (emailInput.value.trim() === "") {
    showError(emailInput, emailError, "Email is required.");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, emailError, "Please enter a valid email address.");
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (passwordInput.value.trim() === "") {
    showError(passwordInput, passwordError, "Password is required.");
    isValid = false;
  } else if (passwordInput.value.length < 8) {
    showError(passwordInput, passwordError, "Password must be at least 8 characters.");
    isValid = false;
  } else {
    clearError(passwordInput, passwordError);
  }

  if (!termsCheckbox.checked) {
    termsError.textContent = "You must accept the terms and conditions.";
    isValid = false;
  } else {
    termsError.textContent = "";
  }

  return isValid;
}

// This event stops the form from refreshing the page
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var formIsValid = validateSignupForm();

  if (formIsValid) {
    successMessage.textContent = "Signup successful. Your information is valid.";
    signupForm.reset();
  }
});

// This section controls the resend verification countdown
var countdown = 10;

function updateResendButtonText() {
  resendButton.textContent = "Resend Verification in " + countdown + "s";
}

updateResendButtonText();

var countdownTimer = setInterval(function () {
  countdown = countdown - 1;

  if (countdown >= 0) {
    updateResendButtonText();
  }

  if (countdown === 0) {
    clearInterval(countdownTimer);
    resendButton.disabled = false;
    resendButton.textContent = "Resend Verification";
  }
}, 1000);

// This event runs only after the button becomes enabled
resendButton.addEventListener("click", function () {
  if (!resendButton.disabled) {
    verificationMessage.textContent = "A new verification message has been sent.";
  }
});

// This function demonstrates synchronous JavaScript
function runSynchronousDemo() {
  var steps = [
    "Step-1 - The function is starting",
    "Step-2 - The Process is in action",
    "Step-3 - The function reached the final stage"
  ];

  var outputHtml = "";

  for (var i = 0; i < steps.length; i = i + 1) {
    outputHtml += "<p>" + steps[i] + "</p>";
  }

  syncOutput.innerHTML = outputHtml;
}

// This event runs the synchronous demo function
runSyncButton.addEventListener("click", runSynchronousDemo);

// This function displays student records after 3 seconds
function loadStudentsAfterDelay() {
  studentStatus.textContent = "Loading students. Please wait 3 seconds...";
  studentOutput.innerHTML = "";

  setTimeout(function () {
    var studentCards = "";

    for (var i = 0; i < studentDatabase.length; i = i + 1) {
      studentCards +=
        "<div class='student-card'>" +
        "<p><strong>ID:</strong> " + studentDatabase[i].id + "</p>" +
        "<p><strong>Name:</strong> " + studentDatabase[i].firstName + " " + studentDatabase[i].lastName + "</p>" +
        "<p><strong>Email:</strong> " + studentDatabase[i].email + "</p>" +
        "<p><strong>Course:</strong> " + studentDatabase[i].course + "</p>" +
        "<p><strong>Age:</strong> " + studentDatabase[i].age + "</p>" +
        "</div>";
    }

    studentStatus.textContent = "Student records loaded successfully.";
    studentOutput.innerHTML = studentCards;
  }, 3000);
}

// This event starts the delayed student loading
loadStudentsButton.addEventListener("click", loadStudentsAfterDelay);
