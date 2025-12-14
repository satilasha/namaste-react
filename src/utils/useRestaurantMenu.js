import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        try {
            const response = await fetch(`https://namastedev.com/api/v1/listRestaurantMenu/${resId}`);
            if (!response.ok) throw new Error("Network response was not ok");
            const json = await response.json();
            console.log("Fetched menu data:", json);
            
            setRestaurantData(json);
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    return restaurantData

}

export default useRestaurantMenu;