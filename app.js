import React from "react";
import ReactDOM from "react-dom/client";
import res from "./restaurant_list.js";



// let heading = React.createElement("h1", { "id": "heading" }, "Hello World from React");

// let Jsxheading = () => (
//     <h1 className="heading">
//         Nameaste React using JSX
//     </h1 >
// )

// let title = (
//     <h1 className="heading">
//         Nameaste React using react element
//     </h1 >
// )

// const ReactComponent = () => (
//     <div>
//         {title}
//         < Jsxheading />
//         <h1>React Component</h1>
//     </div>

// )

const HeaderComponent = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://cdn.dribbble.com/userupload/16778068/file/original-6e3a9c02cdc6bacd491d6d977f02b2dd.jpg?resize=1600x1200&vertical=center" alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                <h2>Search </h2>
            </div>
            <div className="res-container">
                {res.map(restaurants => (
                    <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
                ))}
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {

    const { resData } = props;
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating} = resData.info

    return (
        <div className="res-card">
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="res-logo" />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}




const AppLayout = () => {
    return (
        <div className="app">
            <HeaderComponent />
            <Body />
        </div>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);