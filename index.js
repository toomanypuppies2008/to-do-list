const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");

addButton.addEventListener("click", function () {
  const newLiElement = document.createElement("li");
  newLiElement.textContent = taskInput.value;
  taskList.append(newLiElement);
  taskInput.value = "";
  newLiElement.classList.add("newLi");
});

taskList.addEventListener("click", function (event) {
  if (event.target.classList.contains("newLi")) {
    event.target.classList.toggle("completed");
  }
});
