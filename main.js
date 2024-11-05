
//  lode pej to men pej



function loadContent(page) {
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content').innerHTML = '<p>Error loading content.</p>';
            console.error('Error fetching content:', error);
        });
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Page reload ke baad ya initial load pe query parameter ke basis par content fetch karna
document.addEventListener('DOMContentLoaded', () => {
    const page = getQueryParam('page');
    if (page) {
        loadContent(`${page}.html`);
    }
});






// Toggle Navbar on smaller screens
// document.querySelector(".nav-toggle").addEventListener("click", () => {
// document.querySelector(".nav-links").classList.toggle("show");
// });





// Function to filter navigation links based on search input
function detasearch() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const links = document.querySelectorAll('nav a');
  

    links.forEach(link => {
        if (!link.classList.contains('nav-toggle')) { // Exclude the nav-toggle button "If the link does not have the
            //  'nav-toggle' class, then this code block will execute."
             const linkText = link.textContent.toLowerCase();
            if (linkText.includes(searchInput)) {
                link.style.display = 'inline-block'; // Show matching link
            } else {
                link.style.display = 'none'; // Hide non-matching link
            }
        }
 } );
}


