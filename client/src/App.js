import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios'; // allows you to communicate with the server
import TodoLists from "./components/TodoLists";


const NumberGuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [result, setResult] = useState('');
  const [name, setName] = useState('');
  const [infoTodo, setInfoTodo] = useState([]);
  const [update, setUpdate] = useState(true);

  useEffect(
    function () {
      axios
        .get("http://localhost:4000/guess")
        .then((res) => {
          setInfoTodo(res.data); // the data (toddatabaseo )
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    [update] // if this boolean is true, run the function in useEffect 
  );

const handleSubmit = async (e) => {
  e.preventDefault();

  const updateHandler = () => {
    setUpdate(!update);
  };

  updateHandler(); // displays the updated database 
  

  try {
    const response = await 
    axios
    .post('http://localhost:4000/guess', { guess, name });
    setResult(response.data.result);
  } catch (error) {
    console.error(error);
  }
};


  const deleteHandler = (e) => {
    axios.delete(`http://localhost:4000/guess/${e.target.name}`);

    setInfoTodo((data) => {
      return data.filter((todo) => todo._id !== e.target.name);
    });
  };

return (
  <div className='todo-Container'>
    <form onSubmit={handleSubmit}>
      <h1>Guess between 1-100</h1>
      <input type="number" value={guess} onChange={(e) => setGuess(e.target.value)} />
      <h1>Enter your name</h1>
      <input type="string" value={name} onChange={(e) => setName(e.target.value)} />
      
      <button type="submit" >Submit</button>
    </form>
  
        {result}
    <section className="todo-data">
        <h1></h1>
        <ul className="todo-list-block">
          {infoTodo.map((todoInfo, index) => (
            <TodoLists
              key={index}
              todoInfos={todoInfo}
              // editHandler={editHandler}
             deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      </section>
  </div>
  
);


};

export default NumberGuessingGame;



// import { Routes, Route } from 'react-router-dom';
// import DisplayTodo from './components/DisplayTodo';
// import CreateTodo from './components/CreateTodo';
// import './App.css';


// // routes use the clients URL
// function App() {
//   return (
//     <div className="todo-Container">
//       <Routes>
//         <Route exact path="/" element={<DisplayTodo/>} />
//         <Route path="/add-list" element={<CreateTodo/>} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
