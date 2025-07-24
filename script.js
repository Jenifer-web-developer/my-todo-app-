function addTask() {
  // Get the task input value
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  // Check if input is not empty
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  // Create new list item (li)
  const li = document.createElement("li");
  li.textContent = taskText;

  // Add Delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    li.remove();
  };

  // Add Complete Feature
  li.onclick = function () {
    li.style.textDecoration = "line-through";
  };

  // Add everything to task list
  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);

  // Clear the input
  taskInput.value = "";
}
