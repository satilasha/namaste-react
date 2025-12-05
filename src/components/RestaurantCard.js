const { IMAGE_CDN_URL } = require("../utils/constants.js");

const RestaurantCard = (props) => {

    const { resData } = props;
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating} = resData.info

    return (
        <div className="res-card">
            <img className="res-logo" src={IMAGE_CDN_URL + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default RestaurantCard;