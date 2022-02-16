document.getElementById('loginSubmit').addEventListener('click', function () {
    // user Name
    const nameField = document.getElementById('userName');
    const userName = nameField.value;

    // user Emaiaddress
    const emailField = document.getElementById('userEmail');
    const userEmail = emailField.value;

    // user Password
    const passwordField = document.getElementById('userPassword');
    const userPassword = passwordField.value;

    // user confirm password
    const passConfirm = document.getElementById('userConfirmPass');
    const confirmPass = passConfirm.value;

    if (userName == 'hasan' && userEmail == 'rony@gmail.com' && userPassword == 'hasan5060' &&
        userPassword == confirmPass) {
        window.location.href = 'bank.html'
    }
})