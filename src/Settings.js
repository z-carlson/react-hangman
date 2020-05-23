import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-modal">
      <form>
        <h1>Settings</h1>
        <div>
        <h3>Color Theme</h3>
          <div className="color-theme">
            <h4>Light mode</h4>
              <label className="theme-switch">
                <input type="checkbox" />
                <span className="slider round"></span>
              </label>
            <h4>Dark mode</h4>
          </div>
        </div>
        <div className="difficulty-select">
          <h3>Difficulty</h3>
          <div>
            <input type="radio" id="easy" name="difficulty" value="1" />
            <label htmlFor="easy">I'm too young to die</label> 
          </div>
          <div>
            <input type="radio" id="normal" name="difficulty" value="2" />
            <label htmlFor="normal" checked >Hurt me plenty</label>
          </div>
          <div>
            <input type="radio" id="hard" name="difficulty" value="3" />
            <label htmlFor="hard">Ultra-violence</label>
          </div>
          <div>
            <input type="radio" id="very-hard" name="difficulty" value="4" />
            <label htmlFor="very-hard">Nightmare</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Settings