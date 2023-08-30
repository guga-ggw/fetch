import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {

  const[value, setvalue] = useState('')
  const [todos, settodos] = useState([])


  const handlechange = (e) => {
    setvalue(e.target.value)
    
  }
  const btnclick = (e) => {
    e.preventDefault();
  
    if (value !== "") {
      const todo = {
        name: value,
        id: Date.now(),
        iscomplete: false,
      };
      
      settodos((prev) => [...prev, todo]);
      setvalue('');
    } else {
      alert('Enter something');
    }
  
    fetch('/api/v1/probe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer Dff5-6bvSYo8_ExUaRXgJ38tgZ_9-7dntIC0EQUt8nXe89f_eA`,
      },
      body: JSON.stringify([todos]), // Send only the new todo
    })
  };
console.log(todos)

  return (
    <div className="App">
  <form onSubmit={btnclick}>
    <input 
      type="text"
      value={value} 
      onChange={(e) => handlechange(e)}
    />
    <button >Submit</button>
  </form>
<div className="todo">
    <h1 id='plan_txt'>Your plan</h1>
{todos.map((item) => (
  <div className="full">
  <div className="progress">
<div className="each_todo">
      <h1>{item.name}</h1>
      <div className="buttons">
        <button>delete</button>
        <button>Complete</button>
      </div>
  </div>
  </div>
  <div className="completed">

  </div>
  
  </div>
  ))}
</div>
  
</div>
  );
}

export default App;
