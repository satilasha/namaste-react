import { RestaurantCard, withPromotedLabel } from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import useRestaurantList from "../utils/useRestaurantList.js";

console.log("BODY FILE LOADED - SHOULD ALWAYS PRINT");


const Body = () => {
    // local state variable - super powerful
    // use to create local state variable inside a component
    const [searchText, setSearchText] = useState("")

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

    // if no dependency array, useEffect will be called on every re-render
    // if empty dependency array, useEffect will be called only once after initial render
    // if dependency array with variables, useEffect will be called whenever those variables change

    const { res, filteredRes, setFilteredRes } = useRestaurantList()

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) {
        return <h1>🔴 You are offline! Please check your internet connection.</h1>
    }

    return res.length === 0 ? (
        <Shimmer />
    ) :
        (
            <div className="body">
                <div className="px-60 h-56 mx-auto flex items-center justify-around">
                    <div className="flex items-center gap-4">
                        <input text="text"
                            className=" w-80 px-4 py-3 rounded-xl bg-gray-100 shadow-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:bg-white transition"

                            value={searchText} onChange={
                                (e) => {
                                    setSearchText(e.target.value)
                                }
                            }></input>
                        <button className="px-5 py-3 font-medium rounded-xl shadow-md hover:bg-pink-600 hover:text-white active:scale-95 transition bg-pink-200 text-gray-800" onClick={
                            () => {
                                const filteredRes = res.filter(
                                    restaurants => (restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                                        restaurants.info.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase()))
                                )
                                setFilteredRes(filteredRes)
                            }
                        }>Search</button>
                    </div>

                    <button className="px-5 py-3 font-medium rounded-xl shadow-md hover:bg-pink-600 hover:text-white active:scale-95 transition bg-pink-200 text-gray-800" onClick={
                        () => {
                            const filteredRes = res.filter(
                                restaurants => restaurants.info.avgRating > 4.6
                            )
                            setFilteredRes(filteredRes)
                        }}>Top Rated Restaurants</button>
                </div>
                <div className="w-9/12 m-auto ">
                    <h1 className="text-2xl font-bold mb-6 w-full">Restaurants with online food delivery near you</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {filteredRes.map(restaurants => (
                            <Link key={restaurants.info.id} to={`/restaurant/${restaurants?.info.id}`}>
                                {restaurants.info.promoted ? (<RestaurantCardPromoted resData={restaurants} />) : (<RestaurantCard resData={restaurants} />)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
}

export default Body;