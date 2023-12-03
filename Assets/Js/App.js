const toDo_input = document.getElementById("toDo_input");
const button_Add = document.getElementById("button_Add");
let list = document.getElementById("list");

button_Add.addEventListener("click", () => {
  if (toDo_input.value == "") {
    alert("you must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = toDo_input.value;
    li.classList.add("task_list", "my-3");
    list.append(li);
    // li.parentElement.classList.add("py-3");
    let img = document.createElement("img");
    img.setAttribute("src", "../Assets/Images/Svg/Delete_icon.svg");
    li.append(img);
    img.classList.add("delete_icon");
  }
  toDo_input.value = "";
  saveData();
});

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked_list");
    saveData();
  } else if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function showData() {
  list.innerHTML = localStorage.getItem("data");
}
showData();
