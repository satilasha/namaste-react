import { RESTAURANT_LIST_API } from "../utils/constants.js";
import { useState, useEffect } from "react";

const useRestaurantList = () => {
    const [res, setRes] = useState([])
    const [filteredRes, setFilteredRes] = useState([])

     useEffect(() => {
        fetchData()
    }, [])

     const fetchData = async () => {
        const data = await fetch(RESTAURANT_LIST_API)
        const json = await data.json()

        setRes(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRes(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return {res, filteredRes, setFilteredRes};
}

export default useRestaurantList;