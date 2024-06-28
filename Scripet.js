// scripts.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For now, just log the form data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can add code here to send the form data to your email or server
    alert('Thank you for your message!');
});
