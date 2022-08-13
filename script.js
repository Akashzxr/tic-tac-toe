let start =  document.querySelector('.start');
let start_sec = document.querySelector('.start-btn-sec');
let container = document.querySelector(".container");
let restart = document.querySelector('#restart-btn');

start.addEventListener("click",()=>{
    start_sec.classList.toggle('toggle-start');
    container.classList.toggle('toggle-start');
})

let player = "o";
let player2 ="x";
let divs = document.querySelectorAll('.gameboard');

function play(){
    if(player == "o"){
        player="x";
        player2="o";
    }
    else{
        player = "o";
        player2="x";
    }
}

divs.forEach(div => {
    div.addEventListener("click",play,{once:true});
    div.addEventListener('click',()=>{
        console.log("it worked");
        div.textContent=player;
    },{once:true})
    div.addEventListener("click",()=>{
        check(0,1,2);
        check(3,4,5);
        check(6,7,8);
        check(0,3,6);
        check(1,4,7);
        check(2,5,8);
        check(6,4,2);
        check(0,4,8);
    let display = document.querySelector('.player-turn');
    display.textContent="player "+player2+"turn";
    })
});

function check(i,j,k){
    let d1=divs[i].textContent;
    let d2=divs[j].textContent;
    let d3=divs[k].textContent;
    if(d1=='x' && d2=='x' && d3=='x'){
        alert("x won");
    }
    else if(d1=='o'&& d2=='o'&& d3=='o'){
        alert("o won");
    }
}

let grid = document.querySelector('.playing-grid');

restart.addEventListener("click",()=>{
    
    for(let i=0;i<9;i++){
        divs[i].textContent=null;
        divs[i].addEventListener("click",play,{once:true});
        divs[i].addEventListener('click',()=>{
            console.log("it worked");
            divs[i].textContent=player;
        },{once:true})

        divs[i].addEventListener("click",()=>{
            check(0,1,2);
            check(3,4,5);
            check(6,7,8);
            check(0,3,6);
            check(1,4,7);
            check(2,5,8);
            check(6,4,2);
            check(0,4,8);
        let display = document.querySelector('.player-turn');
        display.textContent="player "+player2+"turn";
        })
    }
})

