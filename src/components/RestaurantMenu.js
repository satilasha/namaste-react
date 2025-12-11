import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurantData = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null)

    if (!restaurantData) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = restaurantData.data.cards[2].card.card.info;

    const categories = restaurantData.data.cards[4]
        .groupedCard.cardGroupMap.REGULAR.cards.filter((menu) => menu?.card?.card?.["@type"] == 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory')


    return (
        <div className="restaurant max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 mt-6 transition hover:shadow-lg">
            < div className="estaurantInfo mb-6">
                <h1 className="text-2xl font-bold mb-2">{name}</h1>
                <h3 className="text-gray-600 mb-1">{cuisines.join(", ")}</h3>
                <h4 className="text-gray-700 font-medium">{costForTwoMessage}</h4>
            </div >

            <div className="RestaurantMenu">
                <h1 className="text-xl font-semibold mb-3">Menu</h1>
                <ul className="list-disc list-inside space-y-2">
                    {categories.map((category, index) => (
                        <RestaurantCategory
                            key={category.card?.card?.title}
                            data={category?.card?.card}
                            showItem={index == showIndex ? true : false}
                            setShowIndex={() => setShowIndex(index == showIndex ? null : index)}
                        />
                    ))}
                </ul>
            </div>
        </div>

    )
}

export default RestaurantMenu;