// Check if the user is authenticated on page load
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
});

// Handle login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // Dummy authentication, replace with your logic
    if (username === 'user' && password === 'password') {
        localStorage.setItem('authenticated', 'true');
        showAuthenticatedContent(username);
    } else {
        alert('Invalid username or password');
    }
});

// Handle logout button click
document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('authenticated');
    document.getElementById('loginPage').style.display = 'block';
    document.getElementById('content').style.display = 'none';
});

// Check if the user is authenticated
function checkAuth() {
    if (localStorage.getItem('authenticated')) {
        const username = 'user'; // Get username from local storage or backend
        showAuthenticatedContent(username);
    } else {
        document.getElementById('loginPage').style.display = 'block';
    }
}

// Show content for authenticated users
function showAuthenticatedContent(username) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('usernameDisplay').textContent = username;
}

// Handle dark theme toggle switch
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
    }
});

// Load theme from local storage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.checked = true;
}
