// script.js
const toTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

function handleSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting
  var btn = document.getElementById("submitBtn");
  btn.textContent = "Submitted"; // Change button text
  btn.disabled = true; // Disable the button to prevent multiple submissions

  // Clear the message box content after submission
  var messageBox = document.querySelector(".message-box");
  var nameBox = document.querySelector("input[name='name']");
  var emailBox = document.querySelector("input[name='email']");
  messageBox.value = ""; // Set the value of the message box to an empty string
  nameBox.value = "";
  emailBox.value = "";

  // Display thank you message
  var thankYouMessage = document.getElementById("thankYouMessage");
  thankYouMessage.textContent = "Thank you for your submission!";
  thankYouMessage.style.display = "block"; // Show the message
}

document.getElementById("contactForm").addEventListener("submit", handleSubmit);
