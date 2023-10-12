const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const totalTaskCountSpan = document.getElementById("total-task-count");
const uncheckedTaskCountSpan = document.getElementById("unchecked-task-count");

function updateTaskCount() {
  const totalTasks = document.querySelectorAll("li").length;
  const uncheckedTasks = document.querySelectorAll("li:not(.checked)").length;

  totalTaskCountSpan.textContent = totalTasks;
  uncheckedTaskCountSpan.textContent = uncheckedTasks;
}

function addTask() {
  if (inputBox.value === "") {
    alert("Write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    updateTaskCount();
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    updateTaskCount();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    updateTaskCount();
  }
});

updateTaskCount();
