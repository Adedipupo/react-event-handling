import React,{useState} from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  return (
    <div className="container">
      <input 
        type="text"
        placeholder="Enter Username"
        value={userName}
        onChange={(e)=>setUserName(e.target.value)}
      />
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />

      <h1>{userName}</h1>
      <h2>{showPassword ? password : '*'.repeat(password.length)}</h2>

      <button onClick={(e)=> setShowPassword(!showPassword)}>Show/Hide Password</button>
    </div>
  );
}

export default App;
