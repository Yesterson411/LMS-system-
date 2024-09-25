document.getElementById('logout-button').addEventListener('click', function() {
    // Clear authentication status
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('user');
    
    // Redirect to the login page
    window.location.href = 'login.html';
});