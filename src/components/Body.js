import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


const Body = () => {
    const [res, setRes] = useState([])
    const [filteredRes, setFilteredRes] = useState([])
    const [searchText, setSearchText] = useState("")


    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
        console.log(json)

        
        setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
                                    restaurants => restaurants.info.name.toLowerCase().includes(searchText.toLowerCase())
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
                        <RestaurantCard key={restaurants.info.id} resData={restaurants} />
                    ))}
                </div>
            </div>
        )
}

export default Body;