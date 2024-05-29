const taskList = document.getElementById("taskList");
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput"); //если эту строчку удалить с taskInput dom, то все работает также, почему?

addButton.addEventListener("click", function () {
  const newLiElement = document.createElement("li");
  newLiElement.textContent = taskInput.value;
  taskList.append(newLiElement);
  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  console.log(event.target.tagName);
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("completed");
  }
});
