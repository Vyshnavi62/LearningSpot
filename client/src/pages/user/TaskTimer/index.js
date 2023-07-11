import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Timer.css';
import bellSound from './bell.mp3';

const TaskTimer = () => {
  const [time, setTime] = useState(0);
  const [timerActive, setTimerActive] = useState(false);
  const [timerType, setTimerType] = useState('workTime');
  const [isPaused, setIsPaused] = useState(false);
  const bellAudio = new Audio(bellSound);
  const [currentTimer, setCurrentTimer] = useState('workTime');


  const timerDurations = {
    workTime: parseInt(localStorage.getItem('pomodoroDuration')) || 25,
    shortBreak: parseInt(localStorage.getItem('shortBreakDuration')) || 5,
    longBreak: parseInt(localStorage.getItem('longBreakDuration')) || 15,
  };

  const startTimer = () => {
    if (!timerActive) {
      setTimerActive(true);
      setIsPaused(false);
    } else {
      setIsPaused(!isPaused);
    }

    if (timerType === 'longBreak' && !isPaused) {
      const shortBreakCount = parseInt(localStorage.getItem('shortBreakCount')) || 0;
      const longBreakInterval = parseInt(localStorage.getItem('longBreakInterval')) || 2;

      // Inside the useEffect for timer completion
      if (time === 0 && !isPaused) {
        setTimerActive(false);
        bellAudio.play();

        if (timerType === 'workTime') {
          setCurrentTimer('shortBreak');
        } else if (timerType === 'shortBreak') {
          setCurrentTimer('workTime');
        } else if (timerType === 'longBreak') {
          setCurrentTimer('workTime');
        }

        setTime(timerDurations[currentTimer] * 60);
      }
    }
  };


  const stopTimer = () => {
    setTimerActive(false);
    setTime(timerDurations[timerType] * 60);
  };

  useEffect(() => {
    setTime(timerDurations[timerType] * 60);
  }, [timerType]);
  useEffect(() => {
    let interval = null;
  
    if (timerActive && time > 0 && !isPaused) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0 && !isPaused) {
      setTimerActive(false);
  
      // Play the bell sound
      bellAudio.play();
  
      // Start the next timer immediately
      if (timerType === 'workTime') {
        setCurrentTimer('shortBreak');
        setTimerType('shortBreak');
        setTime(timerDurations.shortBreak * 60);
      } else if (timerType === 'shortBreak') {
        const shortBreakCount = parseInt(localStorage.getItem('shortBreakCount')) || 0;
        const longBreakInterval = parseInt(localStorage.getItem('longBreakInterval')) || 1;
  
        if (shortBreakCount < longBreakInterval ) {
          setCurrentTimer('workTime');
          setTimerType('workTime');
          setTime(timerDurations.workTime * 60);
          localStorage.setItem('shortBreakCount', shortBreakCount + 1);
        } else {
          setCurrentTimer('longBreak');
          setTimerType('longBreak');
          setTime(timerDurations.longBreak * 60);
          localStorage.setItem('shortBreakCount', 0);
        }
      } else if (timerType === 'longBreak') {
        setCurrentTimer('workTime');
        setTimerType('workTime');
        setTime(timerDurations.workTime * 60);
      }
    }
  
    return () => {
      clearInterval(interval);
    };
  }, [timerActive, time, timerType, isPaused]);
  
  

  
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="container">
      <h1>Task Timer</h1>
      <br /><br /><br /><br />
      <div></div>
      <div className="settings">
        <h3>
          <Link to="/user/tasktimer/settings">Settings</Link>
        </h3>
      </div>
      <div className="breaks">
        <button className={`primary-outlined-btn ${timerType === 'workTime' ? 'active' : ''}`} onClick={() => setTimerType('workTime')}>Work Time</button>
        <div className="break-divider">|</div>
        <button className={`primary-outlined-btn ${timerType === 'shortBreak' ? 'active' : ''}`} onClick={() => setTimerType('shortBreak')}>Short Break</button>
        <div className="break-divider">|</div>
        <button className={`primary-outlined-btn ${timerType === 'longBreak' ? 'active' : ''}`} onClick={() => setTimerType('longBreak')}>Long Break</button>
      </div>
      <div>{timerType}</div>
      <div className="timer">
        <div className={`timer-circle ${timerType}`}>
          <span>{formatTime(time)}</span>
        </div><br />
      </div>
      <div className="buttons">
        <button className={`primary-contained-btn ${timerActive && !isPaused ? 'paused' : ''}`} onClick={startTimer}>
          {!timerActive ? 'Start' : isPaused ? 'Resume' : 'Pause'}
        </button>
        <div className="button-divider">|</div>
        <button className='primary-contained-btn' onClick={stopTimer}>Reset</button>
      </div>
    </div>
  );
};

export default TaskTimer;
