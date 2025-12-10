import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between p-5 m-5 bg-pink-900 h-50" >
            <div className="logo-container size-56">
                <img src={LOGO_URL} alt="logo" className="logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex py-10">
                    <li className="px-2 font-bold"> 
                        Online Status : {onlineStatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-2 font-bold">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2 font-bold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2 font-bold">Cart</li>
                    <button className="px-2 font-bold" onClick={
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