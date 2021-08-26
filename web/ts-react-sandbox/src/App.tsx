import React, { useState } from "react";
import "./App.css";

const Parent: React.FC = ({ children }) => {
  const [parentCounter, setParentCounter] = useState(0);

  const randomNumber = Math.random();

  return (
    <div>
      <p>{parentCounter}</p>
      <p>{randomNumber}</p>
      {children}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Parent>
          <p>Prout</p>
        </Parent>
      </header>
    </div>
  );
}

export default App;
