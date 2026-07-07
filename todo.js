function addTask() {

    let subject = document.getElementById("subject").value;
    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;

    if(subject === "" || task === "" || date === ""){
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>
            <strong>${subject}</strong> -
            ${task} (Due: ${date})
        </span>
        <div>
            <button onclick="completeTask(this)">Done</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(li);

    document.getElementById("subject").value = "";
    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
}

function completeTask(button){
    button.parentElement.parentElement.classList.toggle("completed");
}

function deleteTask(button){
    button.parentElement.parentElement.remove();
}