var allElems = document.querySelectorAll('.elem');
var fullelem = document.querySelectorAll('.fullelem');

allElems.forEach(function(elem) {
    elem.addEventListener('click', function() {
        fullelem[elem.id].style.display = 'block';
    });
});
