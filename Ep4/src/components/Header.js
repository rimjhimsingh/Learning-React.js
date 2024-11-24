import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [loginButton, setloginButton] = useState("Login");
    const onlineStatus = useOnlineStatus();
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>

            <div className="nav-items">

                <ul>
                    <li>
                        Online status: {onlineStatus?  "Online" : "Offline"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/about">About</Link>
                    </li>

                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>

                    <li>
                    <Link to="/grocery">Grocery</Link>
                    </li>

                    <li>
                        Cart
                    </li>

                    <button className="login-btn" onClick={() => {
                        setloginButton("Logout");
                        if (loginButton == "Logout")
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