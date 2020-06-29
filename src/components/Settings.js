import React from 'react';
import './Settings.css';


const Settings = ({toggleThemeChange, theme, handleDifficultyChange, difficulty}) => {

  return (
    <div className={(theme === 'light' ? 'settings-modal-light' : 'settings-modal-dark')}>
      <form>
        <h1>Settings</h1>
        <div>
        <h3>Color Theme</h3>
          <div className="color-theme">
            <h4>Light mode</h4>
              <label className="theme-switch">
                <input type="checkbox" onClick={toggleThemeChange} checked={(theme === 'light' ? false : true)}/>
                <span className="slider round" ></span>
              </label>
            <h4>Dark mode</h4>
          </div>
        </div>
        <div className="difficulty-select">
          <h3>Difficulty</h3>
          <div>
            <input 
              type="radio" 
              id="easy" 
              name="difficulty" 
              value="easy"
              checked={difficulty === "easy"}
              onChange={handleDifficultyChange} />
            <label htmlFor="easy">Easy</label> 
          </div>
          <div>
            <input 
              type="radio" 
              id="normal" 
              name="difficulty" 
              value="normal"
              checked={difficulty === "normal"} 
              onChange={handleDifficultyChange}/>
            <label htmlFor="normal">Normal</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="hard" 
              name="difficulty" 
              value="hard" 
              onChange={handleDifficultyChange}
              checked={difficulty === "hard"}/>
            <label htmlFor="hard">Hard</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="very-hard" 
              name="difficulty" 
              value="very-hard" 
              onChange={handleDifficultyChange}
              checked={difficulty === "very-hard"}/>
            <label htmlFor="very-hard">Very Hard</label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Settings