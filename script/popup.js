const open  = document.getElementById('open');
const popup = document.getElementById('popup');
const cls   = document.getElementById('cls');

open.addEventListener('click',() =>{
    popup.classList.add('new');
})

cls.addEventListener('click',() =>{
    popup.classList.remove('new')
})