import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';


interface chatTest {
  sender: string;
}



function App() {
  const test = async(chat: chatTest[]): Promise<void> => {
    try {
        const response = await axios.post('http://localhost:8080/con_test', chat);
        console.log("post chat success", response.data);
    } catch(err) {
        console.error("failed to post chat", err);
        throw err;
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => test([{ sender: "lee" }])}>test</button>
      </header>
    </div>
  );
}

export default App;
