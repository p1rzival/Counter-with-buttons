import './App.css';
import {useState} from "react";
import {nanoid} from "nanoid";


const object = [
  {id: 1, value: 1, buttons: [1]},
  {id: 2, value: 2, buttons: [1, 2]},
  {id: 3, value: 3, buttons: [1, 2, 3]}
]

function App() {

  const [counter, setCounter] = useState(object)

  const plus = (id, button) => {
    const newCounter = counter.map(el => el.id === id ? {...el, value: el.value + button} : el)
    setCounter(newCounter)
  }

  const minus = (id, button) => {
    const newCounter = counter.map(el => el.id === id ? {...el, value: el.value - button} : el)
    setCounter(newCounter)
  }

  const [nextValue, setNextValue] = useState(4)

  const addCounter = () => {
    const newCounter = [...counter, {id: nanoid(), value: nextValue, buttons: [1, 2, 3, 4]}]
    setCounter(newCounter)
    setNextValue(nextValue)
  }

  return (
      <div>

        {counter.map(el => <div>
          {el.buttons.map(button => <button onClick={() => plus(el.id, button)}>{+button}</button>)}
          {el.value}
          {el.buttons.map(button => <button onClick={() => minus(el.id, button)}>{-button}</button>)}


        </div>)}

        <button onClick={addCounter}>Add new Counter</button>

      </div>
  );
}

export default App;

