const picc =document.querySelector('.picc');
const open1 =document.querySelector('.pic1');
const open2 =document.querySelector('.pic2')
const piccc =document.querySelector('.piccc');


open1.addEventListener('click', e=>{
    picc.style.visibility= 'visible';
    
});


picc.addEventListener('click', e=>{
    picc.style.visibility= 'hidden';
});

open2.addEventListener('click', e=>{
    piccc.style.visibility= 'visible';
    
});


piccc.addEventListener('click', e=>{
    piccc.style.visibility= 'hidden';
});