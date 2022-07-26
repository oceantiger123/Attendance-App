import { useState } from "react";
import "./Login.css";

const Login = () => {
    const [user, setUser] = useState({});
    const handleChange = (event)=>{
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    //console.log(user)
  const handleSubmit = () => {};

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
      </form>
    </div>
  );
};

export default Login;
