
function loadNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', loadNavbar);