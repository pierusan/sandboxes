import React, {useState} from 'react';
import './App.css';

const Parent : React.FC = ({children}) => {
  const [parentCounter, setParentCounter] = useState(0)

  const randomNumber = Math.random();

  return <div><p>{parentCounter}</p><p>{randomNumber}</p>{children}</div>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Parent><p>Prout</p></Parent>
      </header>
    </div>
  );
}

export default App;
