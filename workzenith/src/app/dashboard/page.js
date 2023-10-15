'use client'
import React from 'react'
import { useState } from 'react';
import PomodoroTimer from '@/components/PomodoroTimer';
import TodoList from '@/components/TodoList';

export default function Dashboard() {
  const [todoList, setTodoList] = useState([]);
  
  return (
    <div className="w-full container mx-auto p-4 bg-white text-black">
      <div className="text-xl font-bold text-center">Dashboard</div>
      <div className="grid grid-cols-2 gap-4">
        <PomodoroTimer />
        <TodoList todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div>
  );
}
