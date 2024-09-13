
const taskinput= document.getElementById("task");
const deadline=document.getElementById("deadline");
const taskpriority=document.getElementById("priority");
const addtaskbutton=document.getElementById("add-task");
const tasklist=document.getElementById("task-list");

addtaskbutton.addEventListener("click",()=>{
    const taskentered=taskinput.value ;
    const priority=taskpriority.value;
    const deadlinedate=deadline.value;
    if(taskentered=="" || deadlinedate==" "){
        alert("Enter a valid task and deadline");
        return ;
    }
    const today=new Date();
    const deaddate=new Date(deadlinedate);
    if(deaddate<=today){
        alert("Enter a date of future not today");
        return ;
    }

    const taskitem=document.createElement("div");
    taskitem.classList.add("task");
    taskitem.innerHTML=`<p>${taskentered}</p><p>Priority:${priority}</p><p>Deadline:${deadlinedate}</p>
    <button class="mark-done">Mark Done</button>`;

    tasklist.appendChild(taskitem);

    taskinput.value=" ";
    taskpriority.value="top";
    deadline.value=" ";



});
tasklist.addEventListener("click",(event)=>{
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
});
