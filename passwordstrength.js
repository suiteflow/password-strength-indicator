var passwordFields = document.querySelectorAll('[data-password-field="true"]');
var passwordStrengthIndicators = document.querySelectorAll('[data-password-strength-indicator="true"]');

passwordFields.forEach((passwordField, index) => {
  passwordField.addEventListener('input', function (e) {
    var password = e.target.value;
    var strengthText = '';

    if (password.length < 8) {
      strengthText = 'Too short';
    } else if (!/[A-Z]/.test(password)) {
      strengthText = 'Must contain uppercase letters';
    } else if (!/[a-z]/.test(password)) {
      strengthText = 'Must contain lowercase letters';
    } else if (!/[0-9]/.test(password)) {
      strengthText = 'Must contain numbers';
    } else {
      strengthText = 'Strong password';
    }

    passwordStrengthIndicators[index].textContent = strengthText;
  });
});
