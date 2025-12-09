import RestaurantCard from "./RestaurantCard";
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
   
    // if no dependency array, useEffect will be called on every re-render
    // if empty dependency array, useEffect will be called only once after initial render
    // if dependency array with variables, useEffect will be called whenever those variables change

    const {res, filteredRes, setFilteredRes} = useRestaurantList()
   
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return <h1>🔴 You are offline! Please check your internet connection.</h1>
    }

    return res.length === 0 ? (
        <Shimmer />
    ) :
        (
            <div className="body">
                <div className="filter">
                    <div className="search">
                        <input text="text" className="search-box" value={searchText} onChange={
                            (e) => {
                                setSearchText(e.target.value)
                            }
                        }></input>
                        <button className="search-button" onClick={
                            () => {
                                const filteredRes = res.filter(
                                    restaurants => (restaurants.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
                                        restaurants.info.cuisines.join(" ").toLowerCase().includes(searchText.toLowerCase()))
                                )
                                setFilteredRes(filteredRes)
                            }
                        }>Search</button>
                    </div>

                    <button className="filter-button" onClick={
                        () => {
                            const filteredRes = res.filter(
                                restaurants => restaurants.info.avgRating > 4.6
                            )
                            setFilteredRes(filteredRes)
                        }}>Top Rated Restaurants</button>
                </div>

                <div className="res-container">
                    {filteredRes.map(restaurants => (
                        <Link key={restaurants.info.id} to={`/restaurant/${restaurants?.info.id}`}> <RestaurantCard resData={restaurants} />   </Link>
                    ))}
                </div>
            </div>
        )
}

export default Body;