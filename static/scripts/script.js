let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    let navBar = document.querySelector('nav');

    if (prevScrollpos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-60px"; /* Adjust based on the height of your nav bar */
    }

    prevScrollpos = currentScrollPos;
};

let navBar = document.querySelector('nav');

navBar.addEventListener('mouseenter', function() {
    navBar.classList.remove('hidden');
});

navBar.addEventListener('mouseleave', function() {
    if (window.scrollY === 0) {
        navBar.classList.add('hidden');
    }
});
