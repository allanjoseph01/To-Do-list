const task=document.getElementById("input-box");
const listitem=document.getElementById("list-container");
const swi=document.getElementById("bright");
const todo=document.getElementById("tdl");
const bg=document.querySelector("body");
swi.addEventListener('click',() =>{
    tdl.classList.toggle("border-white");
    bg.classList.toggle("bg-black");
});
function addTask(){
    if(task.value === ''){
        alert("You Must Write Something!")
    }else{
        let li=document.createElement("li");
        li.classList.add("list-group-item", "d-flex" ,"align-items-center");

        let icon=document.createElement("span");
        icon.classList.add("bi","bi-circle", "me-2");
        icon.style.cursor="pointer";

        let span=document.createElement("span");
        span.classList.add("bi","bi-x-circle","ms-auto");
        span.style.cursor="pointer";
        
        let txt = document.createElement("div");
        txt.textContent=task.value;

        icon.addEventListener("click",()=> {
            icon.classList.toggle("bi-circle");
            icon.classList.toggle("bi-check-circle");
            txt.classList.toggle("completed")
            saveData();
        });
        span.addEventListener("click", () => {
            listitem.removeChild(li);
            saveData();
        });
        li.appendChild(icon);
        li.appendChild(txt);
        li.appendChild(span);
        listitem.appendChild(li);   
    }
    task.value="";
    saveData();
}

function saveData(){
    localStorage.setItem("data",listitem.innerHTML);
}

function showList(){
    listitem.innerHTML=localStorage.getItem("data");
}
showList();