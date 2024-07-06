import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Textform(props) {

  const [text, setText] = useState("Enter Text Here");

  const handleUpperCase = () => {
    console.log("Button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
  }

  return (
    <>
      <div className='container'>
        <div className="mb-3">
          <h2 className='my-4'  style={{ backgroundColor: props.mode === 'light' ? 'white' : '#052047', color: props.mode === 'light' ? 'black' : 'white' }}>{props.heading}</h2>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows="13" 
            value={text} 
            onChange={handleOnChange} 
            style={{ backgroundColor: props.mode === 'light' ? 'white' : '#052047', color: props.mode === 'light' ? 'black' : 'white' }}
          ></textarea>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleUpperCase}>Convert to UpperCase</button>
        <button type="submit" className="btn btn-danger mx-3" onClick={speak} id='toggle'>Listen to the Text Here</button>
      </div>
      <div className="container" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#052047', color: props.mode === 'light' ? 'black' : 'white' }}
      >
        <p>Your Text Summary</p>
        <p>{text}</p>
        <p>{text.split(" ").filter(word => word.length > 0).length} words and {text.length} characters</p>
      </div>
    </>
  )
}

Textform.propTypes = {
  heading: PropTypes.string,
  mode: PropTypes.string.isRequired,
};

