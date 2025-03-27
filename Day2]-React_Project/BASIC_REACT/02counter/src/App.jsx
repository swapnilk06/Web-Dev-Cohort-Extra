import { useState } from 'react'
import './App.css'


// Task -
// The counter does not go below 0 or not -ve.
// The counter does not exceed 20. 

function App() {

  // use hook

  let [counter, setCounter] = useState(0); // also use  let [counter, swapnilCounter] becz, its reference only

  // let counter = 15

  const addValue = () => {
    // console.log("value added", Math.random()); 
    // console.log("clicked", Math.random());
    //console.log("clicked", counter);
    // counter = counter + 1;

    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  };


  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>

      {/* <button onClick={addValue} >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button> */}

      {/* Disable button when counter reaches the limit */}

      <div className="button-container">
        <button onClick={addValue} disabled={counter >= 20}>Add value</button>
        <br />
        <button onClick={removeValue} disabled={counter <= 0}>Remove value</button>
      </div>

      <p>footer: {counter}</p>
    </>
  )
}

export default App
