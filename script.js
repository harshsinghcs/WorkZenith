// script.js

// Pomodoro Timer
// script.js

let timer;
let minutes = 25;
let seconds = 0;
let isPaused = true;
let pomodoroCount = 0;
let isBreak = false;
let shortBreakDuration = 5; // Duration of short break in minutes
let longBreakDuration = 15; // Duration of long break in minutes

function startTimer() {
    isPaused = false;
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    isPaused = true;
    clearInterval(timer);
    updateDisplay(); // Update the timer display to show the paused time
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
        if (isBreak) {
            // Handle the end of a break (short or long)
            isBreak = false; // Reset the break flag
        } else {
            if (pomodoroCount >= 4) {
                // It's time for a long break
                minutes = longBreakDuration;
            } else {
                // It's time for a short break
                minutes = shortBreakDuration;
            }
            isBreak = true; // Set the break flag
            pomodoroCount++; // Increment the pomodoro count
        }
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

//ShortBreak
function setShortBreak() {
    isPaused = true;
    clearInterval(timer);
    minutes = shortBreakDuration;
    seconds = 0;
    isBreak = true; // Set the break flag
    updateDisplay();
}

//longBreak
function setLongBreak() {
    isPaused = true;
    clearInterval(timer);
    minutes = longBreakDuration;
    seconds = 0;
    isBreak = true; // Set the break flag
    updateDisplay();
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
            linkButton.innerHTML = '<i class="fa-solid fa-link"></i>';
            linkButton.classList.add('bg-blue-500', 'text-white', 'px-2', 'py-1', 'mr-2', 'rounded-md');
            linkButton.onclick = () => linkToTimer(i);
            taskActions.appendChild(linkButton);
        }
        
        const primaryButton = document.createElement('button');
        primaryButton.innerHTML = '<i class="fa-regular fa-star"></i>';
        primaryButton.classList.add('bg-green-500', 'text-white', 'px-2', 'py-1', 'rounded-md');
        primaryButton.onclick = () => setPrimaryTask(i);
        taskActions.appendChild(primaryButton);
        
        taskItem.appendChild(taskText);
        taskItem.appendChild(taskActions);
        todoDisplay.appendChild(taskItem);

        const editButton = document.createElement('button');
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add('bg-yellow-500', 'text-white', 'px-2', 'py-1', 'mr-2', 'rounded-md');
        editButton.onclick = () => editTask(i);
        taskActions.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded-md');
        deleteButton.onclick = () => deleteTask(i);
        taskActions.appendChild(deleteButton);
    }

    const primaryTask = todoList.find(task => task.primary);
    if (primaryTask) {
        const primaryTaskDiv = document.createElement('div');
        primaryTaskDiv.textContent = `Primary Task: ${primaryTask.name}`;

        const unassignPrimaryButton = document.createElement('button');
        unassignPrimaryButton.innerHTML = '<i class="fas fa-times"></i> Remove';
        unassignPrimaryButton.classList.add('ml-2', 'bg-yellow-500', 'text-white', 'px-2', 'py-1', 'rounded-md');
        unassignPrimaryButton.onclick = unassignPrimaryTask;

        primaryTaskDiv.appendChild(unassignPrimaryButton);
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

function unassignPrimaryTask() {
    const primaryTaskIndex = todoList.findIndex(task => task.primary);
    if (primaryTaskIndex !== -1) {
        todoList[primaryTaskIndex].primary = false;
        updateTodoList();
    }
}





// Website Blocker
// Add JavaScript code for website blocker here

// Spotify Music Player
// Add JavaScript code for Spotify music player here
