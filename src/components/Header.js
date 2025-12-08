import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={
                        () => {
                            setBtnName(btnName === "Login" ? "Logout" : "Login")
                        }
                    }>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;