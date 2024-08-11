function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    var li = document.createElement("li");
    li.className = "task-item";
    li.innerHTML = taskInput.value + '<button onclick="deleteTask(this)">Delete</button>';
    taskList.appendChild(li);
    taskInput.value = "";
}

function deleteTask(element) {
    var taskList = document.getElementById("taskList");
    taskList.removeChild(element.parentElement);
}
