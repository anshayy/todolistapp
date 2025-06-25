// Select elements
const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Add task on button click
addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark complete on click
  li.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // prevent toggle when removing
    taskList.removeChild(li);
  });

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';
}

