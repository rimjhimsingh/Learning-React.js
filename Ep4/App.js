import React from "react";
import ReactDOM from "react-dom/client";
/*
- header
    - logo
    - nav items
- body
    - restaurant cards
- footer
    - location 
    - links
    
 */

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://imgs.search.brave.com/8YDzPDk1H5tZQDsXqE9DJm7PxuqLPZXTsbBQdMdYoW0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtcGxhdGZvcm0u/OTlzdGF0aWMuY29t/L09FVXdXRWdxTDJn/NXJKZDNuZ1hMZUV5/WVpNZz0vMTUweDA6/MTA1MHg5MDAvNjAw/eDYwMC85OWRlc2ln/bnMtY29udGVzdHMt/YXR0YWNobWVudHMv/NDMvNDM1ODYvYXR0/YWNobWVudF80MzU4/NjU0Ng.jpeg" />
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
const RestaurantCard = (props) => {
    const {resName, cuisine, rating,deliveryTime,imageSrc} = props;

    return (
        <div className="card-container">
            <img className="mcd-img" src={imageSrc} />
            <div className="res-text">
                <h3>{resName}</h3>
                <h4>{cuisine}</h4>
                <h5>{rating}</h5>
                <h6>{deliveryTime}</h6>
            </div>

        </div>
    )
}
const Body = () => {
    return (
        <div className="body-container">
            <div className="search">
                <h4>Search your Favourite restaurants</h4>
            </div>
            <div className="res-container">
                {<RestaurantCard
                    resName="McD"
                    cuisine="Burgers, fries, icecream machine is broken"
                    deliveryTime="20 minutes"
                    rating="4.5 stars"
                    imageSrc="https://wallpapers.com/images/featured-full/mcdonalds-food-pictures-0ck29igd9pnfxuud.jpg" />}
                {<RestaurantCard
                    resName="Spice of India"
                    cuisine="Indian, Indo-Chinese"
                    deliveryTime="45 minutes"
                    rating="4.9 stars"
                    imageSrc="https://146953715.cdn6.editmysite.com/uploads/1/4/6/9/146953715/s545502237994334893_p31_i1_w500.png" />}
            
            </div>



        </div>

    )
}


// this is the Layout where everything else will go 
// it is a component which is a normal function in js, returns a JSX object
const AppLayout = () => {
    return (
        <div className="app">
            {<Header></Header>}
            {<Body></Body>}


        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);