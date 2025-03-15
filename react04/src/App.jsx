import React, { useState, useCallback, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) string += "0123456789";
    if (characterAllowed) string += "!@#$%^&*_+=[]{}|~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * string.length);
      pass += string.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, characterAllowed]);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])



  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed,passwordGenerator]);

  return (
    <>
      <div className="container">
        <h1>Password Generator</h1>
        <div className="input-container">
          <input type="text" value={password} readOnly className="input" placeholder="Password" ref={passwordRef}/>
          <button onClick={copyToClipboard}>Copy</button>
        </div>
        <div className="controls">
          <input type="range" min="4" max="50" value={length} onChange={(e) => setLength(e.target.value)} />
          <label>Length: {length}</label>
          <input type="checkbox" checked={numberAllowed} onChange={() => setNumberAllowed(!numberAllowed)} />
          <label>Include Numbers</label>
          <input type="checkbox" checked={characterAllowed} onChange={() => setCharacterAllowed(!characterAllowed)} />
          <label>Include Special Characters</label>
          <button onClick={passwordGenerator}>Generate Password</button>
        </div>
      </div>
    </>
  );
};

export default App;
