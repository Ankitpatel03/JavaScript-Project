let addTaskbtn=document.querySelector("#addTaskbtn");
let newTaskInput=document.querySelector("#newTask");
let todolist=document.querySelector("#todolist");


function createTaskElement(taskText){
    let taskElement=document.createElement("div")
    taskElement.innerHTML=`
    <span>${taskText}</span>
    <button class="editTask">Edit</button>
    <button class="deleteTask">Delete</button>
    `

    let deletebtn = taskElement.querySelector(".deleteTask");
    deletebtn.addEventListener("click", () => {
        taskElement.remove();
    })

    let editbtn=taskElement.querySelector(".editTask");
    editbtn.addEventListener("click",()=>{
        let newTaskText=prompt("Edti The Task",taskText);

        if(newTaskInput!==""){
            taskElement.querySelector("span").innerText=newTaskText
        }
    })

    return taskElement;
}


addTaskbtn.addEventListener("click" , function(){
   let taskText= newTaskInput.value.trim()

   if(taskText !==""){
    let taskElement=createTaskElement(taskText)
    todolist.appendChild(taskElement);
    newTaskInput.value =""
    

   }
})
