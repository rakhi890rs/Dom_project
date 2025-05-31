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
let taskCheckbox=document.querySelector('.addTask form #check')

let currentTask=[
    {
        task:'mandir jao',
        details:'hanuman mandir',
        imp:true
    },
    {
        task:'mandir jao',
        details:'hanuman mandir',
        imp:false
    },
    {
        task:'mandir jao',
        details:'hanuman mandir',
        imp:true
    }
]
// form.addEventListener('submit',function(e){
//     e.preventDefault()
    
//     // console.log(taskInput.value)
    
// })
function renderTask(){
var allTask = document.querySelector('.allTask')
var sum=''
currentTask.forEach(function(elem){
    sum=sum+`<div class="task">
                <h5>${elem.task}<span class="${elem.imp}">imp</span></h5>
                <button>Mark as Completed</button>
            </div>`;
})
allTask.innerHTML=sum;
};
renderTask();



form.addEventListener('submit',function(e){
    e.preventDefault()
    
    // console.log(taskInput.value)
    
})


