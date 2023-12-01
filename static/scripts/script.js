let prevScrollpos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos > currentScrollPos) {
        document.getElementById("nav-bar").style.top = "15px";
    } else {
        document.getElementById("nav-bar").style.top = "-65px"; /* Adjust based on the height of your nav bar */
    }

    prevScrollpos = currentScrollPos;
};

let navBar = document.getElementById('nav-bar');

navBar.addEventListener('mouseenter', function() {
    navBar.classList.remove('hidden');
});

navBar.addEventListener('mouseleave', function() {
    if (window.scrollY === 0) {
        navBar.classList.add('hidden');
    }
});
