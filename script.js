// script.js
// Afficher ou masquer le mot de passe avec l'icône œil

const passwordInput = document.getElementById('password');
const togglePassword = document.getElementById('togglePassword');
const eyeOpen = document.getElementById('eyeOpen');
const eyeClosed = document.getElementById('eyeClosed');

togglePassword.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeOpen.style.display = 'none';
    eyeClosed.style.display = 'inline';
  } else {
    passwordInput.type = 'password';
    eyeOpen.style.display = 'inline';
    eyeClosed.style.display = 'none';
  }
});
