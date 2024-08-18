import React, { useState } from 'react';
import logo from './logo.svg';
import './css/wikifull.css';
import WebsitePull from './components/wikipediaPull';

function App() {
  const [highlightedWord, setHighlightedWord] = useState('');

  const highlightRandomWord = () => {
    const words = document.body.innerText.split(' ');
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex];
    setHighlightedWord(randomWord);
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <WebsitePull />
        <button onClick={highlightRandomWord}>Highlight Random Word</button>
        <div style={{ borderRadius: '5px', backgroundColor: 'green', padding: '5px', display: 'inline' }}>
          {highlightedWord}
        </div>
      </header>
    </div>
  );
}

export default App;
