import "../styles/login.css";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/profile",{state: { username: "John Doe", email: document.getElementById("email").value }});
  };
  return (
    <div className="page">
      <div className="signin-container">
      <h2 id="login-heading">Signin to your<br />PopX Account</h2>
      <p id="login-subheading">Welcome back!<br/>Please enter your details.</p>
      </div>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-container">
          <input type="email" id="email" placeholder="Enter email address" name="email" required />
          <label htmlFor="email">Email address  </label>
        </div>
        <div className="input-container">
          <input type="password" id="password" placeholder="Password" name="password" required />
          <label htmlFor="password">Password   </label>
        </div>
        <button type="submit" id="login-button" >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;