var allElems = document.querySelectorAll('.elem');
var fullelempage = document.querySelectorAll('.fullelem');
var fullelempageBackBtn = document.querySelectorAll('.fullelem .back');

allElems.forEach(function(elem) {
    elem.addEventListener('click', function() {
        fullelempage[elem.id].style.display = 'block';
    });
});

fullelempageBackBtn.forEach(function(back){
    back.addEventListener('click',function(){
         fullelempage[back.id].style.display = 'none';
    })
});




// function open


var form=document.querySelector('.addTask form')
console.log(form);

