import './App.css';
import Navbar from "./components/Navbar";
import Textform from './components/Textform';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#052047';
    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Analyze using Text Below" mode={mode} />
      </div>
    </>
  );
}

export default App;
