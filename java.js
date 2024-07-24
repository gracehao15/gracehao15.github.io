// Toggle between light and dark theme
const toggleButton = document.getElementById('toggleButton');

toggleButton.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');

    if (document.body.classList.contains('light-theme')) {
        toggleIcon.classList.remove('fa-sun');
        toggleIcon.classList.add('fa-moon');
    } else {
        toggleIcon.classList.remove('fa-moon');
        toggleIcon.classList.add('fa-sun');
    }
})

// Actively changing text under name
document.addEventListener('DOMContentLoaded', (event) => {
    const textContainer = document.getElementById('text-container');
    const words = ['Beautiful', 'Student', 'Learner', 'Daniel Liu\'s GF', '#justagirl', '#strongindependentwoman'];
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

    menuButton.addEventListener('click', () => {
        if (fullscreenMenu.style.display === 'flex') {
            fullscreenMenu.style.display = 'none';
            menuButton.textContent = 'M E N U';
        } else {
            fullscreenMenu.style.display = 'flex';
            menuButton.textContent = 'C L O S E';
        }
    })
});

//Making the fixed top appear as user scrolls down

document.addEventListener('scroll', function (event) {
    const fixedTop = document.querySelector('.fixed-top');
    const home = document.querySelector('.homepage').offsetHeight;

    //The pixels scrolled is over the pixels of the height of the homepage, we want fixed top to show
    if (window.scrollY > 0) {
        fixedTop.style.top = '20px';
    } else {
        //The pixels scrolled is less than the pixels of the height of the homepage, we want fixed top to not show
        fixedTop.style.top = '-100px';
    }
})
