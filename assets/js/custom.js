var check = function() {
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('confirm-password').value;
    if (password == cpassword || password.length || cpassword.length) {
        password.style.borderColor = 'green';
        cpassword.style.borderColor = 'green';
        document.getElementById('message').innerHTML = '* Passwords match!';
        document.getElementById('message').style.color = 'green';
    } else {
        document.getElementById('message').style.color = 'red';
        password.style.borderColor = 'red';
        cpassword.style.borderColor = 'red';
        document.getElementById('message').innerHTML = '* Passwords do not match';
    }
}