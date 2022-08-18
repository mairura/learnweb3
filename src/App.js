import { useState } from "react"
import "./App.css"
import Shopping from './Components/Shopping';
import LoadingScreen from "./Components/LoadingScreen";
import DependentEffect from "./Components/DependentEffect";

function App() {
  return (
     <div classname="App">
      <Shopping />
      <PrintTypedText />
      <ThisWorks />
      <StateWithInput />
      <StateArray />
      <LoadingScreen />
      <DependentEffect />
     </div>
  );
}
 function PrintTypedText() {
  function handleOnChange(text) {
    console.log(text);
  }

  return <input type="text" onChange={(e) => handleOnChange(e.target.value)} />
}

function ThisWorks() {
  const [myNumber, setMyNumber] = useState(0);

  function increment() {
    setMyNumber(myNumber + 1);
  }

  return (
    <div>
      <p>{myNumber}</p>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

function StateWithInput() {
  const [myName, setMyName ] = useState("");

  function handleOnChange(text) {
    setMyName(text);
  }

  return (
    <div>
      <input type="text" onChange={(e) => handleOnChange(e.target.value)} />
      <p>Hellow, {myName}!</p>
    </div>
  )
}

function StateArray() {
  const [ fruits, setFruits ] = useState([]);
  const [ currentFruit, setCurrentFruit ] = useState("");

  function updateCurrentFruit(text) {
    setCurrentFruit(text);
  }

  function addFruitToArray() {
    const newFruits = [...fruits, currentFruit];
    setFruits(newFruits);
  }

  return (
    <div>
      <input type="text" onChange={(e) => updateCurrentFruit(e.target.value)} />
      <button onClick={addFruitToArray}>Add fruit</button>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  )
}
export default App;
