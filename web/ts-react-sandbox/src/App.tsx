import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";

function sleep(milliseconds: number) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e8; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

// parentCounter is a prop of ChildComponent
const ChildComponent = ({ parentCounter }: { parentCounter: number }) => {
  console.log("child render start");

  const [childCounter, setChildCounter] = useState(0);
  // Will change on every render
  const randomNumber = Math.random();

  //////////////////////////////////////////////////////////////////////////////
  // On first render
  //////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log("child useEffect[]");
  }, []);

  useLayoutEffect(() => {
    console.log("child useLayoutEffect[]");
  }, []);

  //////////////////////////////////////////////////////////////////////////////
  // On every render, when childCounter is updated
  //////////////////////////////////////////////////////////////////////////////
  useLayoutEffect(() => {
    console.log("child useLayoutEffect[childCounter]");
  }, [childCounter]);

  useEffect(() => {
    console.log("child useLayoutEffect[childCounter]");
  }, [childCounter]);

  console.log("child render end");
  return (
    <div className="child-component">
      <h2>And I'm the child 👶</h2>
      <p>Parent Counter: {parentCounter}</p>
      <p>Child Counter: {childCounter}</p>
      <button
        onClick={() => {
          setChildCounter((prevCounter) => prevCounter + 1);
        }}
      >
        Increment child counter
      </button>
      <p>{randomNumber}</p>
    </div>
  );
};

let numRenders = 0;
const ParentComponent: React.FC = ({ children }) => {
  console.log("parent render start");

  numRenders = numRenders + 1;

  const [parentCounter, setParentCounter] = useState(0);
  // Will change on every render
  const randomNumber = Math.random();

  //////////////////////////////////////////////////////////////////////////////
  // On first render
  //////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log("parent useEffect[]");
  }, []);

  useLayoutEffect(() => {
    console.log("parent useLayoutEffect[]");
  }, []);

  //////////////////////////////////////////////////////////////////////////////
  // On every render, when parentCounter is updated
  //////////////////////////////////////////////////////////////////////////////
  useLayoutEffect(() => {
    console.log("parent useLayoutEffect[parentCounter]");
  }, [parentCounter]);

  useEffect(() => {
    console.log("parent useLayoutEffect[parentCounter]");
  }, [parentCounter]);

  console.log("parent render end");

  return (
    <div className="parent-component">
      <h2>Sup! I am the parent 😎</h2>
      <p>Parent Counter: {parentCounter}</p>
      <button
        onClick={() => {
          console.log("Clicked parent counter. Will sleep");
          setParentCounter((prevCounter) => {
            console.log("Increment parent counter by 1");
            return prevCounter + 1;
          });
          setParentCounter((prevCounter) => {
            console.log("Increment parent counter by 1 again");
            return prevCounter + 1;
          });

          // Turns out there is a queue for the state updater, so actually it
          // will first sleep and then, except sometimes 🤷‍♂️
          sleep(1000);
        }}
      >
        Increment parent counter
      </button>
      <p>{randomNumber}</p>
      <ChildComponent parentCounter={parentCounter} />
      <p>Number of renders: {numRenders}</p>
    </div>
  );
};

function App() {
  return (
    <div className="container">
      <ParentComponent />
    </div>
  );
}

export default App;
