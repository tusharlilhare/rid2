  // Select the theme toggle button and icon
  const themeToggle = document.getElementById('theme-toggle');
  const icon = themeToggle.querySelector('i');
  
  // Add event listener for toggling the dark mode
  themeToggle.addEventListener('click', () => {
      // Toggle the dark mode class on the body
      document.body.classList.toggle('dark-mode');
  
      // Update the button icon and text
      if (document.body.classList.contains('dark-mode')) {
          icon.className = 'fas fa-sun';
          // themeToggle.textContent = ' Light Mode';
          themeToggle.prepend(icon);
      } else {
          icon.className = 'fas fa-moon';
          // themeToggle.textContent = ' Dark Mode';
          themeToggle.prepend(icon);
      }
  });
  
  // Initialize light mode by default
  document.body.classList.add(' light-mode');
  