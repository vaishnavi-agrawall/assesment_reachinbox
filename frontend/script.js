document.addEventListener('DOMContentLoaded', function() {
    const Btn1 = document.getElementById('signin-btn-google');
    Btn1.addEventListener('click', function() {
      window.location.href = 'https://localhost:5050/auth/google';
    });
    const Btn2 = document.getElementById('signin-btn-ms');
    Btn2.addEventListener('click', function() {
      window.location.href = 'https://https://localhost:5050/outlook/signin';});
});