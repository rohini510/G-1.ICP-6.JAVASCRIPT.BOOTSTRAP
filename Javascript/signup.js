
function Signupsuccessful() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const errorMessage = document.getElementById('errorMessage');

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'All fields are required.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }
    
   
    alert('Signup successful!');
}