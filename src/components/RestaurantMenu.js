import { RESTAURANT_INFO_API } from "../utils/constants.js";
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const [restaurantData, setRestaurantData] = useState(null);
    const { resId } = useParams();

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

    if (!restaurantData) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = restaurantData.data.cards[2].card.card.info;

    const itemCards = restaurantData.data.cards[4]
        .groupedCard.cardGroupMap.REGULAR.cards[1] // Recommended section
        .card.card.itemCards;


    return (
        <div className="restaurant">
            < div className="restaurantInfo">
                <h1>{name}</h1>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{costForTwoMessage}</h4>
            </div >

            <div className="RestaurantMenu">
                <h1>Menu</h1>
                <ul>
                    {itemCards.map((item) => (
                        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs {item?.card?.info?.price/100}</li>
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default RestaurantMenu;