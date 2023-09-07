function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        message.textContent = 'All fields are required';
        return false;
    }

    if (password !== confirmPassword) {
        message.textContent = 'Passwords do not match';
        return false;
    }

    // You can add more validation rules for email, password strength, etc.

    return true; // Form submission will proceed if all validations pass.
}