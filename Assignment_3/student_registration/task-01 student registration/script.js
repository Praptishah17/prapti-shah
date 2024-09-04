document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');

    form.addEventListener('submit', function (e) {
        let valid = true;

        // Remove leading and trailing spaces
        const trimmedUsername = username.value.trim();
        const trimmedEmail = email.value.trim();
        const trimmedPhone = phone.value.trim();
        const trimmedPassword = password.value.trim();
        const trimmedConfirmPassword = confirmPassword.value.trim();

        // Validate Username
        if (trimmedUsername === '') {
            alert('Username cannot be empty.');
            valid = false;
        }

        // Validate Email using regex
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
        if (!emailPattern.test(trimmedEmail)) {
            alert('Please enter a valid email address.');
            valid = false;
        }

        // Validate Phone number
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(trimmedPhone)) {
            alert('Phone number must be 10 digits and only contain numeric values.');
            valid = false;
        }

        // Validate Password
        const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$&])[A-Za-z\d@#$&]{7,}$/;
        if (!passwordPattern.test(trimmedPassword)) {
            alert('Password must be at least 7 characters long and contain at least one uppercase letter, one digit, and one special character from the set (&,$,#,@).');
            valid = false;
        }

        // Validate Confirm Password
        if (trimmedPassword !== trimmedConfirmPassword) {
            alert('Password and Confirm Password fields must match.');
            valid = false;
        }

        // Prevent form submission if any validation fails
        if (!valid) {
            e.preventDefault();
        }
    });
});
