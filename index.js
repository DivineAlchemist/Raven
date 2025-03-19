

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


let slides = [
    {img: 'hal-gatewood-tZc3vjPCk-Q-unsplash.jpg', textTitle: 'title text one', textMain: 'main text one'},
    {img: 'karsten-winegeart-ZV6VAKLsrpw-unsplash.jpg', textTitle: 'title text two', textMain: 'main text two'},
    {img: 'becomes-co-4rRBpPkopVw-unsplash.jpg', textTitle: 'title text three', textMain: 'main text three'},
]


const slidesContainer = document.querySelector('.carousel-inner');
slides.forEach((slide, index) => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    let textOverlay = document.createElement('div');

    img.src = slide.img;
    div.className = index === 0 ? 'carousel-item active' : 'carousel-item';
    img.className = 'd-block w-100';
    textOverlay.className = 'carousel-caption d-none d-md-block'; // Bootstrap class for captions

    textOverlay.innerHTML = `<h5>${slide.textTitle}</h5><p>${slide.textMain}</p>`; // Overlay text
    div.appendChild(img);
    div.appendChild(textOverlay);
    slidesContainer.appendChild(div);

    img.loading = 'lazy';
    img.alt = `Image representing ${slide.textTitle}`;
});



// Reference to the loading screen element
const loadingScreen = document.getElementById('loadingSC');
const bar = document.getElementById('bar');

// Function to hide the loading screen
function hideLoadingScreen() {
    bar.style.width = '80vw'
    setTimeout(() => {
        loadingScreen.style.display = 'none'; // Hide the loading screen after 9 seconds
    }, 10000); // 10000ms = 10 seconds
}

// Call the function to initiate the timer


function fixes(params) {
    bar.style.width = '0vw'
}

document.onload = fixes()
hideLoadingScreen();
