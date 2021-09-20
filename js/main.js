var typed3 = new Typed('.services', {
    strings: ['Your number one computer plug', 'fix, buy and restore...'],
    typeSpeed: 40,
    backSpeed: 40,
    smartBackspace: true, // this is a default
    loop: true
});

var typed3 = new Typed('.copyright', {
    strings: ['copyright 2021', 'all rights reserved'],
    typeSpeed: 40,
    backSpeed: 40,
    smartBackspace: true, // this is a default
    loop: true
});

// for the navbar 
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function openDropdown() {
    document.getElementById("dropdown").style.display = "block";
}