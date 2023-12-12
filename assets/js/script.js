// Download cv
const cv = document.getElementById('cv');
cv.addEventListener('click', function() {
    // will add this feature
    console.log('download PDF');
});

// mobile menu
const menu = document.getElementById('nav-toggle');
let toggle = false;
menu.addEventListener('click', function() {
    toggle = !toggle;
    if (toggle) {
        console.log('open toggle menu');
        
    } else {
        console.log('close toggle menu');
        
    }

});