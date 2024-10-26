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
const RestaurantCard = () => {
    return (
        <div className = "card-container">
            <img className = "mcd-img"src="https://wallpapers.com/images/featured-full/mcdonalds-food-pictures-0ck29igd9pnfxuud.jpg"/>
            <div className="res-text">
            <h3>MCD</h3>
            <h4>Cuisine</h4>
            <h5>Rating</h5>
            <h6>Delivery Time</h6> 
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
            {<RestaurantCard/>}
            {<RestaurantCard/>}
            {<RestaurantCard/>}
            {<RestaurantCard/>}
            {<RestaurantCard/>}
            {<RestaurantCard/>}
            {<RestaurantCard/>}
            {<RestaurantCard/>}
            {<RestaurantCard/>}
           
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