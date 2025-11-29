import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState([]);

  const fetchUsers=()=>{
    axios.get('/api/users')
    .then((response)=>{
      setUser(response.data);
    })
    .catch((error)=>{
      console.log(error);
    });
  }
  return (
    <div className="App">
      <h1>Hii Buddy!! How are you?</h1>
      <button onClick={fetchUsers}>Fetch Users</button>
      <div>
       {user.map((usr, index)=>(
        <div key={index}>
          <h3>Name: {usr.name}</h3>
          <p>Age: {usr.age}</p>
        </div>
       ))}
      </div>
    </div>
  );
}

export default App;
