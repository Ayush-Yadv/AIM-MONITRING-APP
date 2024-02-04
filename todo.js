const listContainer = document.getElementById("list-container");
const input = document.getElementById("input-box");

function addtask() {
    if (input.value == '') { // if i use === in the condition as we know meaning of === is to cheack type as well as value of data ,
        //but for checking string , trim()function for that .//input.value.trim()==="",
        alert("Add a task in the box");
    } else {
        const li = document.createElement("li");
        li.innerHTML = input.value;
        listContainer.appendChild(li);
        const span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }


    input.value = '';
    savedata();
}
listContainer.addEventListener('click',function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    
}, false);
function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTak(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTak();