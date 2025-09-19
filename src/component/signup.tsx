import { useState } from "react";
import { useNavigate } from "react-router-dom";

function signup(){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState ('');
    const [confirmPassword, setConfirmPassword] = useState ('');    
    const navigate = useNavigate();

    const handleSubmit=(e:React.FormEvent)=>{
        e.preventDefault();
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);  
        
        if(username === '') {
            alert('Username cannot be empty!');
            return;
        }else if(password === '') {
            alert('Password cannot be empty!');
            return;
        }
        else if(password !== confirmPassword) {
            alert('Password and Confirm Password do not match!');
            return;
        }
        else if(email === '') {
            alert('Email cannot be empty!');
            return;
        }else{
            alert('Registration Successful!');
             navigate('/login');
        }   
    }  
   return (
  <div>
    <h1>Signup Page</h1>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
      /><br />
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
      /><br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
      /><br />
      <input
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="Confirm Password"
      /><br />
      <button type="submit">Sign Up</button>
    </form>
  </div>
);
}   
export default signup