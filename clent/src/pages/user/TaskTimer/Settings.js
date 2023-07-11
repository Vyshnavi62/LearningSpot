import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate=useNavigate();
  
  const [pomodoroDuration, setPomodoroDuration] = useState(
    parseInt(localStorage.getItem('pomodoroDuration')) || 25
  );
  const [shortBreakDuration, setShortBreakDuration] = useState(
    parseInt(localStorage.getItem('shortBreakDuration')) || 5
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    parseInt(localStorage.getItem('longBreakDuration')) || 15
  );

  const handleSaveSettings = () => {
    localStorage.setItem('pomodoroDuration', pomodoroDuration.toString());
    localStorage.setItem('shortBreakDuration', shortBreakDuration.toString());
    localStorage.setItem('longBreakDuration', longBreakDuration.toString());
    navigate('/user/tasktimer');
  };

  return (
    <div className="container">
      <div>
        <Link to="/user/tasktimer">Back</Link>
      </div>
      <div>
        <h2>Settings</h2>
        <div>
          <label>
            Work Duration :
            <input type="number"  value={pomodoroDuration} min={1}
              onChange={(e) => setPomodoroDuration(parseInt(e.target.value))}
            />
          </label><br/><br/>
        </div>
        <div>
          <label>
            Short Break :
            <input type="number" value={shortBreakDuration}  min={1}
              onChange={(e) => setShortBreakDuration(parseInt(e.target.value))}
            />
          </label><br/><br/>
        </div>
        <div>
          <label>
            Long Break :
            <input type="number" value={longBreakDuration} min={1}
              onChange={(e) => setLongBreakDuration(parseInt(e.target.value))}
            />
          </label><br/><br/>
        </div>
        <button className='primary-contained-btn' onClick={handleSaveSettings}>Save Settings</button>
      </div>
    </div>
  );
};

export default Settings;
