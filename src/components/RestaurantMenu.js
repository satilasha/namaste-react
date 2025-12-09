import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurantData = useRestaurantMenu(resId);

    if (!restaurantData) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = restaurantData.data.cards[2].card.card.info;

    const itemCards = restaurantData.data.cards[4]
        .groupedCard.cardGroupMap.REGULAR.cards[1]
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