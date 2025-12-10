import { IMAGE_CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {

    const { resData } = props;
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating} = resData.info

    return (
        <div className="res-card rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
            <img className="res-logo w-full h-40 object-cover rounded-lg mb-4" src={IMAGE_CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <h4 className="text-gray-600 mb-1">{cuisines.join(", ")}</h4>
            <h4 className="text-gray-700 font-medium mb-1" >{avgRating} stars</h4>
            <h4 className="text-gray-700" >{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;