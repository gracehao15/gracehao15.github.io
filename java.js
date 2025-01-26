// Toggle between light and dark theme
document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('toggleButton');

    if (toggleButton) {
        toggleButton.addEventListener('click', function () {
            document.body.classList.toggle('light-theme');

            if (document.body.classList.contains('light-theme')) {
                toggleIcon.classList.remove('fa-sun');
                toggleIcon.classList.add('fa-moon');
            } else {
                toggleIcon.classList.remove('fa-moon');
                toggleIcon.classList.add('fa-sun');
            }
        });

    }

});

// Actively changing text under name
document.addEventListener('DOMContentLoaded', (event) => {
    const textContainer = document.getElementById('text-container');
    const words = ['Engineering Student', 'Problem Solver', 'Creative', 'Hard Working', 'Diligent', 'Analytical', 'Flexible'];
    const typingDelay = 200;
    const erasingDelay = 100;
    const newTextDelay = 2000;

    let wordsIndex = 0;
    let charIndex = 0;
    //Using let because we are expecting a reassignment of variables

    function typer() {
        if (charIndex < words[wordsIndex].length) {
            //get the next character of the same word

            //add the next character to the word into the textContainer
            textContainer.textContent += words[wordsIndex].charAt(charIndex);
            charIndex++;

            //setTimeout(function, timer in milliseconds) --> sets a timer whcih executes the function after timer done
            setTimeout(typer, typingDelay);

        } else {
            //erase the current word
            setTimeout(erase, newTextDelay);
        }
    }

    function erase() {
        if (charIndex > 0) {
            // haven't erased the entire word yet
            textContainer.textContent = words[wordsIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingDelay);

        } else {
            //type the next word in the string
            wordsIndex++;
            if (wordsIndex >= words.length) {
                wordsIndex = 0;
            }
            setTimeout(typer, typingDelay);
        }
    }

    setTimeout(typer, newTextDelay + 250);

});

// Animating the menu button

// (event) => is an arrow function, it is the same as function(event). thus, this statement can also be written as:
// 1 -- document.addEventListener('DOMContentLoaded), function(event) { insert function });
// 2 -- function myAltFunction() { insert function } , document.addEventListener('DOMContentLoaded', myAltFunction)
document.addEventListener('DOMContentLoaded', (event) => {
    const menuButton = document.querySelector('.dropbutton');
    const fullscreenMenu = document.querySelector('.dropdown-content');

    if (menuButton) {
        menuButton.addEventListener('click', () => {
            if (fullscreenMenu.style.display === 'flex') {
                fullscreenMenu.style.display = 'none';
                menuButton.textContent = 'M E N U';
            } else {
                fullscreenMenu.style.display = 'flex';
                menuButton.textContent = 'C L O S E';
            }
        })
    }
});

//Making the fixed top appear as user scrolls down

document.addEventListener('DOMContentLoaded', (event) => {

    var navbar = document.getElementById('navigation');
    if (navbar) {
        console.log('Element found:', navbar);
        console.log('offsetTop:', navbar.offsetTop);
    } else {
        console.error('Element not found');
    }

    var defaultIndicator = document.getElementById('progress-indicator');
    var changeIndicator = document.getElementById('indicator');

    if (navigation) {
        var sticky = navbar.offsetTop;

        window.onscroll = function () {
            makeNavBarSticky();
        }

        function makeNavBarSticky() {
            if (window.scrollY >= sticky) {
                navbar.classList.add('sticky');
                defaultIndicator.classList.add('stick');
                changeIndicator.classList.add('sticks');
            } else {
                navbar.classList.remove('sticky');
                defaultIndicator.classList.remove('stick');
                changeIndicator.classList.remove('sticks');
            }
        }

    }

});

//Auto-scroll button to the fixed naviagtion bar

document.addEventListener('DOMContentLoaded', (event) => {
    const scrollButton = document.getElementById('scrollButton');
    const targetSection = document.getElementById('navigation');

    scrollButton.addEventListener('click', function () {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });

});

// Dynamic Scroll line

document.addEventListener('DOMContentLoaded', (event) => {

    // 1. Get current position of scroll in pixels
    // 2. Get total height of scrollable part minus visible area
    // 3. Calculate progress in percentage
    // 4. Change CSS property width of indicator bar based on scroll

    function scrollIndicator() {
        const currentPos = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        //scrollHeight gives you the total height of the scrollable part of the page
        //clientHeight gives you the part that the user sees (viewport)
        // the difference gives you the maximum scroll height

        const scrolled = (currentPos / height) * 100;

        document.getElementById('indicator').style.width = scrolled + '%'
    }

    document.addEventListener('scroll', scrollIndicator);

});

// Enable scrolling in description part of the projects page until user reaches a certain point 

document.addEventListener('DOMContentLoaded', (event) => {
    const descriptionSection = document.getElementById('descriptionSection');
    var navbar = document.getElementById('navigation');
    var sticky = navbar.offsetTop;

    function enableScroll() {

        if (window.scrollY >= sticky) {
            descriptionSection.style.pointerEvents = 'auto';
            descriptionSection.style.overflow = 'auto';
        } else {
            descriptionSection.style.pointerEvents = 'none';
            descriptionSection.style.overflow = 'hidden';
        }
    }

    document.addEventListener('scroll', () => {
        enableScroll();
        makeNavBarSticky();
    })

})

// Changing the project number when you scroll past a description

document.addEventListener('DOMContentLoaded', (event) => {
    var numberSection = document.getElementById('numberSection');
    var scrollAmount = 0;
    let incrementThreshold = 300; // Increment number after scrolling 300px
    let currentNumber = 0;

})

document.addEventListener('DOMContentLoaded', () => {
    const projectNumber = document.getElementById('numberSection');
    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                projectNumber.textContent = entry.target.dataset.number;
            }
        });
    }, {
        threshold: 0.7 // Adjust to trigger when 50% of the element is visible
    });

    projects.forEach(project => {
        observer.observe(project);
    });
});

// Image slideshow 

document.addEventListener('DOMContentLoaded', () => {
    const images = ["grace.jpeg", "grace1.jpeg", "grace2.jpeg", "grace3.jpeg"];
    let index = 0;
    let numImages = images.length;

    function changeImage() {
        slideshow = document.getElementById("slideshow");
        slideshow.src = images[index];
        index = (index + 1) % numImages;
    }

    setInterval(changeImage, 3000);
})
