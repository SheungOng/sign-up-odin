var check = function() {
    var passwordInput = document.getElementById('password');
    var cpasswordInput = document.getElementById('confirm-password');
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('confirm-password').value;
    if (password == cpassword && password.length && cpassword.length) {
        passwordInput.style.borderColor = 'green';
        cpasswordInput.style.borderColor = 'green';
        document.getElementById('message').innerHTML = '* Passwords match!';
        document.getElementById('message').style.color = 'green';
    } else if(password !== cpassword && password.length && cpassword.length) {
        document.getElementById('message').style.color = 'red';
        passwordInput.style.borderColor = 'red';
        cpasswordInput.style.borderColor = 'red';
        document.getElementById('message').innerHTML = '* Passwords do not match';
    } else {
        passwordInput.style.borderColor = '#ced4da';
        cpasswordInput.style.borderColor = '#ced4da';
        document.getElementById('message').innerHTML = '';
    }
}