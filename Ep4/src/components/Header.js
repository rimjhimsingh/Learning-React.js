import {LOGO_URL} from "../utils/constants";
import {useState} from "react";
const Header = () => {
    const [loginButton, setloginButton] = useState("Login");
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className = "login-btn" onClick={() => {
                        setloginButton("Logout");
                        if(loginButton == "Logout")
                            setloginButton("Login");

                    }}>
                        {loginButton}
                    </button>
                </ul>
            </div>
        </div>
    )
}
//this is the deafult export
export default Header;