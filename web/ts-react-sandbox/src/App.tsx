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
const ChildComponent = ({
  parentCounter,
  otherPropNotInParentState,
}: {
  parentCounter: number;
  otherPropNotInParentState: number;
}) => {
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
  useEffect(() => {
    console.log("child usEffect[childCounter]");
  }, [childCounter]);

  useLayoutEffect(() => {
    console.log("child useLayoutEffect[childCounter]");
  }, [childCounter]);

  //////////////////////////////////////////////////////////////////////////////
  // On every render, when parentCounter is updated
  //////////////////////////////////////////////////////////////////////////////
  useEffect(() => {
    console.log("child useEffect[parentCounter]");
  }, [parentCounter]);

  useLayoutEffect(() => {
    console.log("child useLayoutEffect[parentCounter]");
  }, [parentCounter]);

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
      <p>Other prop not in parent state: {otherPropNotInParentState}</p>
    </div>
  );
};

const ChildComponentMemo = React.memo(ChildComponent);

// Outside variables illustrating what you shouldn't do. Not super sure about
// what's happening here, probably something weird with closures...
let outsideVariable = 0;
let outsideVariable2 = { counter: 0 };
let outsideVariable3 = 0;
const ParentComponent = () => {
  console.log("parent render start");

  console.log({ outsideVariable });
  console.log({ outsideVariable2 });
  console.log(outsideVariable2.counter);
  outsideVariable = outsideVariable + 1;
  outsideVariable2.counter = outsideVariable2.counter + 1;
  console.log({ outsideVariable });
  console.log({ outsideVariable2 });
  console.log(outsideVariable2.counter);

  // Update the function scoped variable `outsideVariable3` every second to show
  // that it won't trigger a re-render of the child component even though it is
  // passed as a state. Only the state update will trigger a re-render
  useEffect(() => {
    setInterval(() => {
      outsideVariable3 = outsideVariable3 + 1;
      console.log(
        `Updated outsideVariable3 to ${outsideVariable3} but that shouldn't trigger a child render`
      );
    }, 1000);
  }, []);

  // Main counter, passed to child
  const [parentCounter, setParentCounter] = useState(0);
  // Second counter, not passed to child, but illustrates that if the state of
  // the parent changes, the child will always re-render, even though the value
  // is not passed as prop. React.memo could probably optimize things here if
  // needed, illustrated above by ChildComponentMemo
  const [parentCounter2, setParentCounter2] = useState(0);

  // Show what happens when the callback is async
  const [asyncParentCounter, setAsyncParentCounter] = useState(0);

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
  useEffect(() => {
    console.log("parent useEffect[parentCounter]");
  }, [parentCounter]);

  useLayoutEffect(() => {
    console.log("parent useLayoutEffect[parentCounter]");
  }, [parentCounter]);

  console.log({ outsideVariable });
  console.log({ outsideVariable2 });
  console.log(outsideVariable2.counter);

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
          // will first sleep and then, except sometimes 🤷‍♂️ (probably eager
          // computation based on the fact that we didn't know that the state
          // had changed)
          sleep(1000);
        }}
      >
        Increment parent counter
      </button>
      <p>Parent Counter2: {parentCounter2}</p>
      <button
        onClick={() => {
          setParentCounter2((prevCounter) => {
            return prevCounter + 1;
          });
        }}
      >
        Increment parent counter 2
      </button>
      <p>Async Counter: {asyncParentCounter}</p>
      <button
        onClick={async () => {
          console.log(
            "Clicked async parent counter. Will wait for a setTimeout"
          );
          await new Promise((r) => setTimeout(r, 2000));
          setAsyncParentCounter((prevCounter) => {
            console.log("Increment async parent counter by 1");
            return prevCounter + 1;
          });
          setAsyncParentCounter((prevCounter) => {
            console.log(
              "Increment async parent counter by 1 again, but" +
                " this time in another render, showing that " +
                "the render schedules are not batched"
            );
            return prevCounter + 1;
          });
        }}
      >
        Increment async parent counter
      </button>
      <p>{randomNumber}</p>
      <ChildComponent
        parentCounter={parentCounter}
        otherPropNotInParentState={outsideVariable3}
      />
      <ChildComponentMemo
        parentCounter={parentCounter}
        otherPropNotInParentState={outsideVariable3}
      />
    </div>
  );
};

const BailOutRenderComponent = () => {
  console.log("bailout render start");

  const [bailoutCounter, setBailoutCounter] = useState(0);

  console.log("bailout render end");

  return (
    <div className="bailout-component">
      <p>Bailout Counter: {bailoutCounter}</p>
      <button
        onClick={() => {
          setBailoutCounter(() => {
            console.log(
              "Will set the bailout counter to 17, sometimes " +
                "eagerly before render sometimes so that " +
                "it can bail the render"
            );
            return 17;
          });
        }}
      >
        Increment bailout counter
      </button>
    </div>
  );
};

/* eslint-disable eqeqeq */
const RefValueComponent = () => {
  let a: any = 10;
  let b = a;
  a++;
  let str1 = `PRIMITIVES ASSIGNED BY VALUE
    let a = 10;
    let b = a;
    a++;
    console.log(a)     --> ${a} 
    console.log(b)     --> ${b} 
    `;

  a = { k: "v" };
  b = a;
  a.k = "newV";
  let str2 = `
    OBJECTS ASSIGNED BY REF
    a = { k: "v" };
    b = a;
    a.k = 'newV'
    console.log(a.k)     --> ${a.k} 
    console.log(b.k)     --> ${b.k}  
  `;

  function changeStuff(a: number, b: { item: string }, c: { item: string }) {
    a = a * 10;
    b.item = "changed";
    c = { item: "changed" };
  }

  let num = 10;
  let obj1 = { item: "unchanged" };
  let obj2 = { item: "unchanged" };

  changeStuff(num, obj1, obj2);

  let str3 = `
    PASS BY ... IN FUNCTIONS

    function changeStuff(a, b, c) {
      a = a * 10;
      b.item = "changed";
      c = { item: "changed" };
    }

    let num = 10;
    let obj1 = { item: "unchanged" };
    let obj2 = { item: "unchanged" };
    changeStuff(num, obj1, obj2);
    console.log(num);        -->  ${num}
    console.log(obj1.item);  -->  ${obj1.item} 
    console.log(obj2.item);  -->  ${obj2.item}
  `;

  return (
    <div className="refvalue-component">
      {str1}
      {str2}
      {str3}
    </div>
  );
};
/* eslint-enable eqeqeq */

const TABS: Map<string, JSX.Element> = new Map<string, JSX.Element>([
  [
    "React Render",
    <>
      <ParentComponent />
      <BailOutRenderComponent />
    </>,
  ],
  ["Ref / Value", <RefValueComponent />],
]);
function App() {
  const [tabName, setTabName] = useState("React Render");

  return (
    <div className="container">
      <nav>
        <div>
          {Array.from(TABS.keys()).map((tabName) => (
            <button
              key={tabName}
              onClick={() => {
                setTabName(tabName);
              }}
            >
              {tabName}
            </button>
          ))}
        </div>
      </nav>
      {TABS.get(tabName)}
    </div>
  );
}

export default App;
