// Select DOM elements
const taskInput = document.getElementById('task-input'); // Input field for new tasks
const addBtn = document.getElementById('add-btn');       // Button to add new tasks
const todoList = document.getElementById('todo-list');   // List container for tasks

// Function to add a new task
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get input value and trim whitespace

    // Check if input is empty
    if (!taskText) {
        alert('Please enter a task!');
        return;
    }

    // Create a new list item for the task
    const listItem = document.createElement('li');
    listItem.className = 'todo-item';

    // Create a span for the task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';

    // Add functionality to delete the task
    deleteBtn.addEventListener('click', () => {
        todoList.removeChild(listItem);
    });

    // Append the task text and delete button to the list item
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // Append the list item to the to-do list
    todoList.appendChild(listItem);

    // Clear the input field
    taskInput.value = '';
});

// Allow adding tasks by pressing the Enter key
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addBtn.click(); // Trigger the add button click event
    }
});
