/* eslint-disable semi */
import React from 'react';
// import logo from './logo.svg';
import './App.scss';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/space-before-function-paren
function App() {
  // 'react/react-in-jsx-scope': 'off'

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
