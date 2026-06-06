import "../styles/signup.css";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    navigate("/profile",{state: {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value
    }});
        }
  return (
    <div className="create-account-page">
      <span className="head-cont"><h2 id="create-account-heading">Create your <br></br>PopX Account</h2></span>
      <form className="signup-form" onSubmit={handleSignup}>
        <div className="input-box">
  <input type="text" id="name" name="name" required />
  <label htmlFor="name">Full Name <span className="required">*</span></label>
</div>
        <div className="input-box">
          <input type="tel" id="number" name="number" required />
          <label htmlFor="number">Phone Number <span className="required">*</span></label>
        </div>
        <div className="input-box">
          <input type="email" id="email" name="email" required />
          <label htmlFor="email">Email address <span className="required">*</span></label>
        </div>
        <div className="input-box">
          <input type="password" id="password" name="password" required />
          <label htmlFor="password">Password <span className="required">*</span></label>
        </div>
        <div className="input-box">
          <input type="password" id="confirm-password" name="confirm-password" required />
          <label htmlFor="confirm-password">Confirm Password <span className="required">*</span></label>
        </div>
        <div className="input-box">
          <input type="text" id="companyname" name="companyname" required />
          <label htmlFor="companyname">Company Name </label>
        </div>
        <p id="radio?">Are you an Agency? <span className="required">*</span></p>
        <div className="radio-group">
          <label>
            <input type="radio" name="agency" value="yes" />
            Yes
          </label>
          <label>
            <input type="radio" name="agency" value="no" />
            No
          </label>
        </div>
        <button type="submit" id="createAccount-button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;