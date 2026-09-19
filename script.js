// Pine City Mall - contact form validation
// Runs only on contact.html (checks the form exists first)

var contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var isValid = true;

    var nameInput = document.getElementById("cf-name");
    var emailInput = document.getElementById("cf-email");
    var subjectInput = document.getElementById("cf-subject");
    var messageInput = document.getElementById("cf-message");

    function markField(fieldId, fieldIsOk) {
      var field = document.getElementById(fieldId);
      if (fieldIsOk) {
        field.classList.remove("invalid");
      } else {
        field.classList.add("invalid");
        isValid = false;
      }
    }

    // Name: must be more than 1 character
    markField("f-name", nameInput.value.trim().length > 1);

    // Email: simple pattern check for something@something.something
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    markField("f-email", emailPattern.test(emailInput.value.trim()));

    // Subject: must be more than 1 character
    markField("f-subject", subjectInput.value.trim().length > 1);

    // Message: must be more than 4 characters
    markField("f-message", messageInput.value.trim().length > 4);

    if (!isValid) {
      return; // stop here so the user can fix the highlighted fields
    }

    // All good - hide the form and show the confirmation message
    document.getElementById("contactFormWrap").classList.add("hide");
    document.getElementById("confirmBox").classList.add("show");
  });
}

function resetForm() {
  document.getElementById("contactForm").reset();
  var fields = document.querySelectorAll("#contactForm .field");
  fields.forEach(function (field) {
    field.classList.remove("invalid");
  });
  document.getElementById("confirmBox").classList.remove("show");
  document.getElementById("contactFormWrap").classList.remove("hide");
}
