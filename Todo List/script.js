// Show edit and delete dropdown
function showMenu (selectedTask)
{
  let menuDiv = selectedTask.parentElement.lastElementChild;
  menuDiv.classList.add("show");
  document.addEventListener("click", e =>
  {
    if (e.target.tagName != "I" || e.target != selectedTask)
    {
      menuDiv.classList.remove("show");
    }
  });
}


// CRUD
// Data structure
// const todo = {
//   id: "", - int
//   title: "", - string
//   isCompleted: false - boolean
// };

// DOM vars
const todoInput = document.getElementById("todo-input");
const todoListContainer = document.querySelector(".task-box");
const filters = document.querySelectorAll(".filters span");
const clearAllBtn = document.querySelector(".clear-btn");
const updateBtn = document.querySelector(".update-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const pendingFilter = document.getElementById('pending');
const allFilter = document.getElementById('all');
const completedFilter = document.getElementById('completed');
const editModeText = document.getElementById('edit-mode-text');


//Get todoDB from localstorage
const todoDB = "db101";
// Reading from localstorage
const todoDBInstance = JSON.parse(localStorage.getItem(todoDB)) || [];


//util
function reload ()
{
  window.location.reload();
}

// Filters for active class [All, Pending, Completed]
filters.forEach(btn =>
{
  btn.addEventListener("click", () =>
  {
    document.querySelector("span.active").classList.remove("active");
    btn.classList.add("active");
  });
});

// UUID
// function uuidv4 ()
// {
//   return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
//     (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
//   );
// }

//Todo: Create Function
const addTodo = (e) =>
{
  if (e.key === "Enter")
  {
    const newTodo = {
      _id: Number(Math.random().toString().substr(2, 7)),
      title: todoInput.value,
      isCompleted: false
    };

    // Test
    // console.log(...todoDBInstance, { id: 1, title: 'hello', isCompleted: true });
    const updatedTodoDB = [...todoDBInstance, newTodo];
    localStorage.setItem(todoDB, JSON.stringify(updatedTodoDB));

    reload();
    todoInput.value = '';
  }
};

//Todo: Render Function
const renderTodoItems = () =>
{
  const todoListItems = todoDBInstance.map(({ _id, title, isCompleted }) =>
  {
    let completed = isCompleted == true ? "checked" : "";

    return `
  <li class="task">
  <label for="${ _id }">
    <input onchange="checkState(${ _id })" type="checkbox" id="${ _id }" ${ completed }>
    <p class="${ completed }">${ title }</p>
  </label>
  <div class="settings">
    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
    <ul class="task-menu">
      <li onclick="editMode(${ _id })"><i class="uil uil-pen"></i>Edit</li>
      <li onclick="deleteTodo(${ _id })"><i class="uil uil-trash"></i>Delete</li>
    </ul>
  </div>
</li>
  `;
  }).join("");

  todoListContainer.innerHTML = todoListItems || `<p id="no-task">You don't have any task here</p>`;;
  let checkTask = todoListContainer.querySelectorAll(".task");
  !checkTask.length ? clearAllBtn.classList.remove("active") : clearAllBtn.classList.add("active");
  todoListContainer.offsetHeight >= 200 ? todoListContainer.classList.add("overflow") : todoListContainer.classList.remove("overflow");
};

const tasksState = (state) =>
{
  const pending = todoDBInstance.filter(({ isCompleted }) => isCompleted == state);
  const todoListItems = pending.map(({ _id, title, isCompleted }) =>
  {
    let completed = isCompleted == true ? "checked" : "";

    return `
  <li class="task">
  <label for="${ _id }">
    <input onchange="checkState(${ _id })" type="checkbox" id="${ _id }" ${ completed }>
    <p class="${ completed }">${ title }</p>
  </label>
  <div class="settings">
    <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
    <ul class="task-menu">
      <li onclick="editMode(${ _id })"><i class="uil uil-pen"></i>Edit</li>
      <li onclick="deleteTodo(${ _id })"><i class="uil uil-trash"></i>Delete</li>
    </ul>
  </div>
</li>
  `;
  }).join("");

  todoListContainer.innerHTML = todoListItems;

};

// Todo: Checkbox Function 
const checkState = (id) =>
{
  const checked = todoDBInstance.find((todo) => todo._id === id);

  checked.isCompleted === false ? checked.isCompleted = true : checked.isCompleted = false;

  let updatedTodoDB = todoDBInstance.map((todo) => todo._id === id ? checked : todo);

  localStorage.setItem(todoDB, JSON.stringify(updatedTodoDB));
  renderTodoItems();
};

//Todo: Update Function
// Edit mode function
const editMode = (todoId) =>
{
  const todo = todoDBInstance.find((todo) => todo._id === todoId);
  todoInput.value = todo.title;
  todoInput.focus();
  editModeText.style.display = "block";
  updateBtn.style.display = "block";
  cancelBtn.style.display = "block";
  updateBtn.setAttribute("id", todoId);
};

function updateTodoTitle ()
{
  const { id } = this;
  const _id = parseInt(id);
  const todoUpdate = todoDBInstance.find((todo) => todo._id === _id);

  todoUpdate.title = todoInput.value;

  let updatedTodoDB = todoDBInstance.map((todo) => todo._id === _id ? todoUpdate : todo);

  localStorage.setItem(todoDB, JSON.stringify(updatedTodoDB));
  todoInput.value = '';
  reload();
}

const cancelEditMode = () =>
{
  todoInput.value = '';
  updateBtn.style.display = "none";
  cancelBtn.style.display = "none";
};

//Todo: Delete Function
function deleteTodo (todoId)
{
  // console.log(todoId);
  let deleteConfirmation = confirm("Are you sure you want to delete this task?");
  if (deleteConfirmation)
  {
    const updateTodoDB = todoDBInstance.filter(({ _id }) => _id !== todoId);
    localStorage.setItem(todoDB, JSON.stringify(updateTodoDB));
    reload();
  }
}

//Todo: Clear all Function
function clearAll ()
{
  localStorage.removeItem(todoDB);
  reload();
}

//Todo: Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners ()
{
  // Add event
  todoInput.addEventListener("keypress", addTodo);
  // Render event
  document.addEventListener("DOMContentLoaded", renderTodoItems);
  // Clear event
  clearAllBtn.addEventListener("click", clearAll);
  // update edit
  updateBtn.addEventListener("click", updateTodoTitle);
  // Cancel edit
  cancelBtn.addEventListener("click", cancelEditMode);
  // Render pending tasks
  pendingFilter.addEventListener("click", () => tasksState(false));
  // Render completed tasks
  completedFilter.addEventListener("click", () => tasksState(true));
  //Render all tasks
  allFilter.addEventListener("click", renderTodoItems);
}
