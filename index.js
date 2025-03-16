const menu = document.getElementById('button');
const burger = document.getElementById('burger');
const body = document.getElementById('body')
const search = document.getElementById('search')
const searchBox = document.getElementById('searchBox')

menu.addEventListener('click', function () {

    // Set initial display state
    if (!burger.style.display) {
        burger.style.display = "none";
    }

    // Toggle display with animations
    if (burger.style.display === "none") {
        burger.style.display = "block";
        burger.style.animation = "slide-in 0.5s forwards";
    } else {
        burger.style.animation = "slide-out 0.5s forwards";
        setTimeout(() => {
            burger.style.display = "none";
        }, 500); // Match the animation duration
    }
});


document.addEventListener('click', function (event) {
    const isClickInsideMenu = burger.contains(event.target);
    const isClickOnButton = button.contains(event.target);

    if (!isClickInsideMenu && !isClickOnButton) {
        burger.style.animation = "slide-out 0.5s forwards";
        setTimeout(() => {
            burger.style.display = "none";
            body.style.backgroundColor = "#ffffff";
        }, 500); // Match the animation duration
    }
});

// search.addEventListener('click', function(){
//     if (!searchBox.style.display) {
//         searchBox.style.display = 'none'
//     }
//     if (searchBox.style.display === 'none') {
//         searchBox.style.display = 'block'
//         searchBox.style.width = '10%'
//     }
//     else {
//         searchBox.style.width = '0%'
//         setTimeout(() => {
//             searchBox.style.display = 'none'
//         }, 500);
//     }
// })




// search.addEventListener('click', function () {
//     searchBox.classList.toggle('show'); // Toggle the "show" class
// });


search.addEventListener('click', function () {
    if (!searchBox.classList.contains('show')) {
        // First, set display to block, then animate
        searchBox.style.display = 'block';
        setTimeout(() => {
            searchBox.classList.add('show'); // Add class for animations
        }, 10); // Delay slightly to ensure CSS transitions trigger
    } else {
        // Remove the 'show' class for closing animation
        searchBox.classList.remove('show');
        setTimeout(() => {
            searchBox.style.display = 'none'; // Hide after animation completes
        }, 500); // Match CSS transition duration
    }
});
