function openFeatures(){
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
}
openFeatures();



let form=document.querySelector('.addTask form')
let taskInput=document.querySelector('.addTask form input')
let taskDetailsInput=document.querySelector('.addTask form textarea')
form.addEventListener('submit',function(e){
    e.preventDefault()
    
    console.log(taskInput.value)
})

