// function that builds a grid in the "container"

    cont = document.getElementById("GB1");
    let teste = 0;
    for (let rows = 0; rows < 16; rows++) {
        console.log(teste);
        teste += 1;
        for (let columns = 0; columns <= 16; columns++) {
            cont.innerHTML += ("<div id='grid' class='grid'></div>");
        };
        cont.innerHTML += ("<br>");
    };


function novojogo(valor){
    cont = document.getElementById("GB1");
    cont.innerHTML = "";
    let teste = 0;
    for (let rows = 0; rows < valor; rows++) {
        console.log(teste);
        teste += 1;
        for (let columns = 0; columns <= valor; columns++) {
            cont.innerHTML += ("<div id='grid' class='grid'></div>");
        };
        cont.innerHTML += ("<br>");
    };   
}


function func(event) 
{  
    event.target.style.backgroundColor = "red";
    //event.document.setAttribute("style", "background-color:green;");
    //event.setAttribute("style", "background-color:green;")
   console.log("hovering");
}

function func1(event) 
{  
    event.target.style.backgroundColor = "red";
    //event.document.setAttribute("style", "background-color:red;")
   console.log("hovering")
}

function pintar() {
const items = document.querySelectorAll(".grid");
items.forEach((item) => {
    item.addEventListener("mouseover", func, false);
    item.addEventListener("mouseout", func1, false);
});
}

const butao1 = document.getElementById("bt1");
const butao2 = document.getElementById("bt2");
const butao3 = document.getElementById("bt3");
if(butao1) {
    butao1.addEventListener('click',function() {
        novojogo(16);
        pintar();
    });
    console.log("A correr....")
}
if(butao2) {
    butao2.addEventListener('click',function() {
        novojogo(24);
        pintar();
    });
    console.log("A correr....")
}
if(butao3) {
    butao3.addEventListener('click',function() {
        novojogo(32);
        pintar();
    });
    console.log("A correr....")
}


pintar();