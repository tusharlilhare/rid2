// Function to apply the saved theme on page load
function applySavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme);
        updateIcon(savedTheme);
    } else {
        document.body.classList.add('light-mode'); // Default theme
    }
}

// Function to toggle the theme
function toggleTheme() {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light-mode');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }
    updateIcon(document.body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode');
}

// Function to update the icon based on the theme
function updateIcon(theme) {
    const icon = document.getElementById('theme-icon');
    if (theme === 'dark-mode') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// On page load, apply the saved theme
applySavedTheme();

// Add event listener for theme toggle
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
