import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();


    const cartItems = useSelector((store) => store.cart.items)

    return (
        <header className="bg-pink-100/20 shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link to="/">
                    <div className="flex items-center space-x-3">
                        <img
                            src={LOGO_URL}
                            alt="logo"
                            className="w-16 h-16 object-contain rounded-lg shadow-sm"
                        />
                        <span className="text-2xl font-bold text-gray-800 tracking-wide">
                            FoodVilla
                        </span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav>
                    <ul className="flex items-center space-x-6 text-gray-700 font-semibold">

                        <li className="flex items-center space-x-1 text-sm">
                            <span>Online:</span>
                            <span>{onlineStatus ? "🟢" : "🔴"}</span>
                        </li>

                        <li className="hover:text-pink-600 transition">
                            <Link to="/">Home</Link>
                        </li>

                        <li className="hover:text-pink-600 transition">
                            <Link to="/about">About</Link>
                        </li>

                        <li className="hover:text-pink-600 transition">
                            <Link to="/contact">Contact</Link>
                        </li>

                        <li className="hover:text-pink-600 transition">
                            <Link to="/grocery">Grocery</Link>
                        </li>

                        <li className="hover:text-pink-600 transition cursor-pointer">
                            <Link to="/cart">Cart 🛒 - {cartItems.length}</Link> 
                        </li>

                        <li>
                            <button
                                onClick={() =>
                                    setBtnName(btnName === "Login" ? "Logout" : "Login")
                                }
                                className="px-4 py-2 bg-pink-600 text-white rounded-lg shadow 
                                       hover:bg-pink-700 transition font-medium"
                            >
                                {btnName}
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;