import React, { useState } from 'react';


function App() {
  let [word, wordGenerate] = useState(['First word']);
  return (
    <div>
    <p>Click to generate random word </p>
  <h3>{word}</h3>
    <button onClick={() => wordGenerate(word=Math.random().toString(36).substring(7))}>
      Click me
    </button>
  </div>
  );
}
//Math.random().toString(36).substring(7);

export default App;
