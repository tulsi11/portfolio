const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.controls');
const secBtn = document.querySelectorAll('.control');
const allSec = document.querySelector('.content-full');

function Transition(){
    //button active
    for(let i=0;i < secBtn.length; i++){
        secBtn[i].addEventListener("click", function(){
            let cuurBtn = document.querySelectorAll('.active-btn');
            cuurBtn[0].className = cuurBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //section active
    allSec.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove selected from the btns
            secBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sects
            sections.forEach((section)=>{
                section.classList.remove('active');
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

Transition();