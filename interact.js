

// function declaration for scrolling events 
function moveUp(){
    window.scrollBy(0,-20);
}

function moveDown(){
    window.scrollBy(0,20);
}

let page = document.body

// js logic to toggle dark or light mode 
let state = true;
function toggleMode(){
    if(state){
        page.classList.add('dark');
        document.getElementById('modebtn').innerHTML = "Light";
        state = false;
    }
    else{
        page.classList.remove('dark');
        document.getElementById('modebtn').innerHTML = "Dark";
        state = true;
    }
}


