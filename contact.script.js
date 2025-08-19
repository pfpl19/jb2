// Initialize EmailJS
(function() {
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔑 replace with your EmailJS Public Key
})();

const form = document.getElementById("contact-form");
const statusMsg = document.getElementById("form-status");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this)
    .then(() => {
      statusMsg.textContent = "✅ Message sent successfully!";
      statusMsg.className = "status success";
      form.reset();
    }, (err) => {
      statusMsg.textContent = "❌ Failed to send message. Please try again.";
      statusMsg.className = "status error";
      console.error("EmailJS Error:", err);
    });
});
