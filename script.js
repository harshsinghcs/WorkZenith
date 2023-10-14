// script.js

// Pomodoro Timer
// script.js

let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true;

function startTimer() {
    isPaused = false;
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
}

function resetTimer() {
    isPaused = true;
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        // Add a notification or alert here when the timer finishes
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }
}

function updateDisplay() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Initialize the display
updateDisplay();


// Todo List
// Add this in script.js

const todoList = [];

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();

    if (task !== '') {
        const newTask = { name: task, linked: false, primary: false };
        todoList.push(newTask);
        taskInput.value = '';
        updateTodoList();
    }
}

function linkToTimer(index) {
    todoList[index].linked = true;
    updateTodoList();
}

function setPrimaryTask(index) {
    for (let i = 0; i < todoList.length; i++) {
        todoList[i].primary = (i === index);
    }
    updateTodoList();
}

function updateTodoList() {
    const todoDisplay = document.getElementById('todoList');
    const primaryTaskDisplay = document.getElementById('primaryTask');
    
    todoDisplay.innerHTML = '';
    primaryTaskDisplay.innerHTML = '';
    
    for (let i = 0; i < todoList.length; i++) {
        const taskItem = document.createElement('div');
        taskItem.classList.add('flex', 'justify-between', 'mb-2');
        
        const taskText = document.createElement('div');
        taskText.textContent = todoList[i].name;
        
        const taskActions = document.createElement('div');
        
        if (!todoList[i].linked) {
            const linkButton = document.createElement('button');
            linkButton.textContent = 'Link to Timer';
            linkButton.classList.add('bg-blue-500', 'text-white', 'px-2', 'py-1', 'mr-2');
            linkButton.onclick = () => linkToTimer(i);
            taskActions.appendChild(linkButton);
        }
        
        const primaryButton = document.createElement('button');
        primaryButton.textContent = 'Set as Primary';
        primaryButton.classList.add('bg-green-500', 'text-white', 'px-2', 'py-1');
        primaryButton.onclick = () => setPrimaryTask(i);
        taskActions.appendChild(primaryButton);
        
        taskItem.appendChild(taskText);
        taskItem.appendChild(taskActions);
        todoDisplay.appendChild(taskItem);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('bg-yellow-500', 'text-white', 'px-2', 'py-1', 'mr-2');
        editButton.onclick = () => editTask(i);
        taskActions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1');
        deleteButton.onclick = () => deleteTask(i);
        taskActions.appendChild(deleteButton);
    }

    const primaryTask = todoList.find(task => task.primary);
    if (primaryTask) {
        const primaryTaskDiv = document.createElement('div');
        primaryTaskDiv.textContent = `Primary Task: ${primaryTask.name}`;
        primaryTaskDisplay.appendChild(primaryTaskDiv);
    }
}

function editTask(index) {
    const updatedTask = prompt('Edit Task:', todoList[index].name);

    if (updatedTask !== null && updatedTask.trim() !== '') {
        todoList[index].name = updatedTask;
        updateTodoList();
    }
}

function deleteTask(index) {
    todoList.splice(index, 1);
    updateTodoList();
}

// Website Blocker
// Add JavaScript code for website blocker here

// Spotify Music Player
// Add JavaScript code for Spotify music player here
