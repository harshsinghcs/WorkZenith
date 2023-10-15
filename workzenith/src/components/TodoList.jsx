'use client'
import React, { useState } from 'react';

const TodoList = () => {
  const [taskInput, setTaskInput] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = { name: taskInput, linked: false, primary: false };
      setTodoList(prevList => [...prevList, newTask]);
      setTaskInput('');
    }
  };

  const linkToTimer = (index) => {
    const updatedList = [...todoList];
    updatedList[index].linked = true;
    setTodoList(updatedList);
  };

  const setPrimaryTask = (index) => {
    const updatedList = todoList.map((task, i) => ({
      ...task,
      primary: i === index
    }));
    setTodoList(updatedList);
  };

  const editTask = (index) => {
    const updatedTask = prompt('Edit Task:', todoList[index].name);

    if (updatedTask !== null && updatedTask.trim() !== '') {
      const updatedList = [...todoList];
      updatedList[index].name = updatedTask;
      setTodoList(updatedList);
    }
  };

  const deleteTask = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  const unassignPrimaryTask = () => {
    const primaryTaskIndex = todoList.findIndex(task => task.primary);
    if (primaryTaskIndex !== -1) {
      const updatedList = [...todoList];
      updatedList[primaryTaskIndex].primary = false;
      setTodoList(updatedList);
    }
  };

  function updateTodoList() {
  const todoDisplay = document.getElementById('todoList');
  const primaryTaskDisplay = document.getElementById('primaryTask');

  // Sort the todoList to display primary task at the top
  const sortedTodoList = [...todoList].sort((a, b) => (b.primary - a.primary));

  todoDisplay.innerHTML = '';
  primaryTaskDisplay.innerHTML = '';

  for (let i = 0; i < sortedTodoList.length; i++) {
    // Rest of your code remains the same...
  }

  const primaryTask = sortedTodoList.find(task => task.primary);
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


  return (
    <div id="todo" className="bg-gray-200 p-4">
      <div>
        <h2 className="text-xl mb-4">To-Do List</h2>
        <div className="mb-4">
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="border p-2 rounded-md"
            placeholder="Enter a task"
          />
          <button onClick={addTask} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded-md">Add Task</button>
        </div>
        <div id="primaryTask" className="mb-4">
          {/* Primary task will be displayed here */}
        </div>
        <div id="todoList">
          {todoList.map((task, index) => (
            <div key={index} className="flex justify-between mb-2">
              <div>{task.name}</div>
              <div>
                {!task.linked && (
                  <button onClick={() => linkToTimer(index)} className="bg-blue-500 text-white px-2 py-1 mr-2 rounded-md">Link</button>
                )}
                <button onClick={() => setPrimaryTask(index)} className="bg-green-500 text-white px-2 py-1 rounded-md">Primary</button>
                <button onClick={() => editTask(index)} className="bg-yellow-500 text-white px-2 py-1 ml-2 rounded-md">Edit</button>
                <button onClick={() => deleteTask(index)} className="bg-red-500 text-white px-2 py-1 rounded-md">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
