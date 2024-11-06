import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenuCard = () => {
    const [resInfo, setresInfo] = useState();

    useEffect(() => {
        //when the component is rendered, useEffect is called
        fetchMenu();

    }, []);

    const fetchMenu = async () => 
    {
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=257886&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        setresInfo(json.data)
        console.log(json)
    };
    if(resInfo == null)
        return <Shimmer/>

    return (
        <div className="res-menu">
           
            <h1>{resInfo?.cards[0]?.card?.card?.text}</h1>
            <h2>Location</h2>
            <ul>
                <li> {resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[0]?.card?.info?.name}</li>
                <li> Food 2</li>
                <li> Food 3</li>
                <li> Food 4</li>
            </ul>
        </div>

    )
};

export default RestaurantMenuCard;