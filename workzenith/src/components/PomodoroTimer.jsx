'use client'
import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  let timer;
  let [minutes, setMinutes] = useState(25);
  let [seconds, setSeconds] = useState(0);
  let [isPaused, setIsPaused] = useState(true);
  let [pomodoroCount, setPomodoroCount] = useState(0);
  let [isBreak, setIsBreak] = useState(false);
  const shortBreakDuration = 5;
  const longBreakDuration = 15;

  useEffect(() => {
    if (!isPaused) {
      timer = setInterval(updateTimer, 1000);
    } else {
      clearInterval(timer);
    }

    return () => {
      clearInterval(timer);
    };
  }, [isPaused]);

  function startTimer() {
    setIsPaused(false);
  }

  function pauseTimer() {
    setIsPaused(true);
  }

  function resetTimer() {
    setIsPaused(true);
    setMinutes(25);
    setSeconds(0);
  }

  function updateTimer() {
    if (minutes === 0 && seconds === 0) {
      if (isBreak) {
        setIsBreak(false); // Reset the break flag
      } else {
        if (pomodoroCount >= 4) {
          setMinutes(longBreakDuration);
        } else {
          setMinutes(shortBreakDuration);
        }
        setIsBreak(true); // Set the break flag
        setPomodoroCount(prevCount => prevCount + 1); // Increment the pomodoro count
      }
    } else {
      if (seconds === 0) {
        setMinutes(prevMinutes => prevMinutes - 1);
        setSeconds(59);
      } else {
        setSeconds(prevSeconds => prevSeconds - 1);
      }
    }
  }

  function setShortBreak() {
    setIsPaused(true);
    setMinutes(shortBreakDuration);
    setSeconds(0);
    setIsBreak(true);
  }

  function setLongBreak() {
    setIsPaused(true);
    setMinutes(longBreakDuration);
    setSeconds(0);
    setIsBreak(true);
  }

  function updateDisplay() {
    const timerDisplay = document.getElementById('timer');
    if (timerDisplay) {
      timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }

  useEffect(() => {
    updateDisplay();
  }, [minutes, seconds]);

  return (
    <div id="pomodoro" className="bg-gray-200 p-4">
      <div className="text-center">
        <h2 className="text-xl mb-4">Pomodoro Timer</h2>
        <div id="timer" className="text-4xl mb-4">{String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}</div>
        <button onClick={startTimer} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2 rounded-md">Play</button>
        <button onClick={pauseTimer} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-2 rounded-md">Pause</button>
        <button onClick={resetTimer} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-md">Reset</button>
        <button onClick={setShortBreak} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2 rounded-md">ShortBreak</button>
        <button onClick={setLongBreak} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md">LongBreak</button>
      </div>
    </div>
  );
}

export default PomodoroTimer;
