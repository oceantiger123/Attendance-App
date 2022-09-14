import axios from "axios";
import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const handleChange = (event)=>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
  const redirect = ()=>{
    window.location.href = '/'
  };
   
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      const {data:token} = await axios.post('/auth/login', user);
      
      window.localStorage.setItem('token', token.token);
      redirect()

    } catch (err){
      setError(err.response.data)
    }
  };
  
  return (
    <div className="login-comp">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            <big>Username</big>
          </label>
          <input name="username" type="text" value={user.username} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="password">
            <big>Password</big>
          </label>
          <input name="password" type="password" value={user.password} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">Log In</button>
        </div>
        {/* {error && error.response && <div> {error.response.data} </div>} */}
        <div>{error} </div>
      </form>
    </div>
  );
};

export default Login;
