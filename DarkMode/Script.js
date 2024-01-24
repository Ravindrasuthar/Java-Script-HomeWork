var toggle=false;

let hsel = document.getElementsByTagName("h1")[0];
let csel = document.getElementById("circle");
let bsel = document.getElementsByTagName("body")[0];

document.getElementById("container").addEventListener("click",doit);

function doit(){
    if(!toggle)
    {
        hsel.style.color="white";
        csel.className = "dark-mode";
        bsel.style.backgroundColor = "black";
        toggle = true;
    }
    else
    {
        hsel.style.color="black";
        csel.className="circle";
        bsel.style.backgroundColor = "white";
        toggle = false;
    }
}