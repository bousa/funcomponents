import React from 'react';
import './App.css';
import './style.css'
import CustomContent from './customcontent';

function App() {
  return (
    <div className="App">
      
      <CustomContent title={`developer {by}`}/>
      <a href="https://github.com/apotox/funcomponents.git" target="_blank">Github</a>
    </div>
  );
}

export default App;
