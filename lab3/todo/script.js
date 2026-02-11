const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    if (input.value.trim() === "") return;

    // Create li
    const li = document.createElement("li");

    // Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create span (task text)
    const span = document.createElement("span");
    span.textContent = input.value;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    // Mark as done
    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    // Delete task
    deleteBtn.addEventListener("click", function () {
        taskList.removeChild(li);
    });

    // Append elements
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    input.value = "";
}
