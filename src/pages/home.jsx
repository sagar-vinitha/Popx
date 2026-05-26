import { useNavigate } from "react-router-dom";
import "../styles/home.css";
function Home() {
    const navigate = useNavigate();
    return(
        <div className="home-container">
        <div className="login-container">
            <h2 id="home-heading">Welcome to PopX</h2>
            <p id="home-subheading">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <button id="createAccount-button" onClick={()=> navigate("/signup")}>Create Account</button>
            <button id="login-button" onClick={() => navigate("/login")}>Already Registered? Login</button>
            </div>
            </div>

    )
    }
    export default Home;