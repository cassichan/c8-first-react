import { useState } from "react";
import "./App.css";

const names = ["Gustavo", "Cass", "Gianna", "Corwin"];

function App() {
  // const myName = "Cass";
  const [myName, setMyName] = useState("Cass");
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>{myName} is cool.</p>
        {names.map((name) => (
          <button key={name} onClick={() => setMyName(name)}>
            {name}
          </button>
        ))}
        <p>You clicked the button {counter} times</p>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(counter - counter)}>Reset</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
