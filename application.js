function validatePassword () {
    let passValue = document.getElementById('user_password').value;
    let confirm_passValue = document.getElementById('confirm_password').value;
    let pass = document.getElementById('user_password');
    let confirm_pass = document.getElementById('confirm_password');
    if (passValue != confirm_passValue) {
        let element =  document.getElementById('passwordValidation')
        element.innerHTML = "Passwords do not match"
        pass.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
        pass.style.border = 'solid 1px rgba(255, 0, 0)';
        confirm_pass.style.backgroundColor = 'rgba(255, 0, 0, 0.3)';
        confirm_pass.style.border = 'solid 1px rgba(255, 0, 0)';
    } else {
        let element =  document.getElementById('passwordValidation')
        element.innerHTML = ""
        pass.style.backgroundColor = 'rgba(21, 229, 21, 0.3)';
        pass.style.border = 'solid 1px rgba(21, 229, 21)';
        confirm_pass.style.backgroundColor = 'rgba(21, 229, 21, 0.3)';
        confirm_pass.style.border = 'solid 1px rgba(21, 229, 21)';
    }
}