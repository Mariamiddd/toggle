const button = document.querySelector('.btn');
const text = document.querySelector('.texttotoggle');


button.addEventListener('click', function() {
    // Your event handling code here
    text.classList.toggle('toggledClass');
});