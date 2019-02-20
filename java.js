
//Just define default value for n (for grid)
// let n = prompt("Import grid: ");
let n = 16;

//Function for create grid
function Create(n) {
for(let i = 0; i<n; i++) {
    for(let j=0; j<n; j++) {
        t = 100 / n;
        var divi = document.createElement("div");
        // var para = document.createElement("p");
        // var node = document.createTextNode("Samo ga metni negde");
        // divi.style.color =  "red";
        divi.style.backgroundColor = "white";
        // divi.style.border = "black";
        divi.classList.add('skrati');
        divi.style.display = "inline-block";
        divi.style.width = t + "%";
        divi.style.height = t + "%";
        divi.onmouseover = function(){
            this.style.backgroundColor = rgba();
        };
        var element = document.getElementById("sqr");
        // divi.onmouseover = divi.style.backgroundColor = rgba();
        element.appendChild(divi);
        // element.appendChild(node);
    }
    
}
}
//Call function for creating grid
Create(n);


//RemoveGrid function 
function removeGrid(className){
    var elements = document.getElementsByClassName(className);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

//ReCreate grid function
function reCreate(x){
    removeGrid("skrati");
    Create(x);
}

//Return value from input field 
const input1 = document.getElementById("valueGrid");
function gridNum() {
    return input1.value;
}

//Reset grid to white background
function reset(){
    var div1 = document.querySelectorAll(".skrati");
    for (let i = 0; i<div1.length; i++) {
        div1[i].style.backgroundColor = "white";
    }    
}
//Generate random nubmer from 0 to x 
function random(x) {
    return Math.floor(Math.random() * x);
}

//Generate random rgba color
function rgba(){
    return "rgba(" + random(255) + "," + random(255) + "," + random(255) + ", 0.5)";
  }
