const div = document.querySelector('.container');

function randomNO(){
         const no =  Math.floor((Math.random()*1000) + 1 )
         div.innerHTML = no;
}

div.addEventListener('click',randomNO)