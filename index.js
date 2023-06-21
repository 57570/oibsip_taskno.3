const text = document.getElementById("input");
const pendingTaskBox = document.getElementById("PendingtasksBox");
const CompletedTaskList = document.getElementById("CompletedTaskList")
function AddTasks() {
  const task = text.value;
  if (!task) {
    alert("Please Enter A Task");
  }

  const PendingTask = document.createElement("div");
  PendingTask.classList.add("PendingTask");

  const TextBox = document.createElement("div");
  TextBox.classList.add("TextBox");

  const input = document.createElement("input");
  input.classList.add("text");
  input.setAttribute("readonly", "readonly");
  input.value = task;
  input.type = "text";

  const buttons = document.createElement("div");
  buttons.classList.add("actions");

  const Editbutton = document.createElement("button");
  Editbutton.classList.add("Edit");
  Editbutton.innerHTML = "Edit";

  const Deletebutton = document.createElement("button");
  Deletebutton.classList.add("Delete");
  Deletebutton.innerHTML = "Delete";

  const CompletedBtn = document.createElement("button");
  CompletedBtn.classList.add("Complete");
  CompletedBtn.innerHTML = "Done";

  buttons.appendChild(Editbutton);
  buttons.appendChild(CompletedBtn);
  buttons.appendChild(Deletebutton);

  TextBox.appendChild(input);
  PendingTask.appendChild(TextBox);
  PendingTask.appendChild(buttons);
  pendingTaskBox.appendChild(PendingTask);

  Editbutton.addEventListener("click", () => {
    if (Editbutton.innerText === "Edit") {
      input.removeAttribute("readonly");
      Editbutton.innerText = "Save";
    } else {
      input.setAttribute("readonly", "readonly");
      Editbutton.innerText = "Edit";
    }
  });

  Deletebutton.addEventListener("click",()=>{
    pendingTaskBox.removeChild(PendingTask);
  });

  CompletedBtn.addEventListener("click", () => {

    pendingTaskBox.removeChild(PendingTask);

    console.log(input.value)
    const CompletedTask1 = document.createElement("div");
    CompletedTask1.classList.add("CompletedTask");
  
    const TextBox1 = document.createElement("div");
    TextBox1.classList.add("TextBox");

    const value = input.value
    const input1 = document.createElement("input");
    input1.classList.add("text");
    input1.setAttribute("readonly", "readonly");
    input1.value = value;
    input1.type = "text";

  const buttons = document.createElement("div");
  buttons.classList.add("actions");

  const Deletebutton = document.createElement("button");
  Deletebutton.classList.add("Delete");
  Deletebutton.innerHTML = "Delete";    
    
  buttons.appendChild(Deletebutton);
  TextBox1.appendChild(input1);

  CompletedTask1.appendChild(TextBox1);
  CompletedTask1.appendChild(buttons);
  CompletedTaskList.appendChild(CompletedTask1);

  Deletebutton.addEventListener("click",()=>{
    CompletedTaskList.removeChild(CompletedTask1);
  });
});

  text.value = "";
}

function EditTask() {
  const input = document.getElementsByClassName("text");
  input.setAttribute("readonly", "");
}
