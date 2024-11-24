import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router"
const RestaurantMenuCard = () => {
    const [resInfo, setresInfo] = useState();
    const {resId} = useParams(); //params is an object which has the resId
    console.log(resId);

    useEffect(() => {
        //when the component is rendered, useEffect is called
        fetchMenu();

    }, []);

    const fetchMenu = async () => 
    {
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId)
        const json = await data.json();
        setresInfo(json.data)
        

    };
    if(resInfo == null)
        return <Shimmer/>
    const {text}= resInfo?.cards[0]?.card?.card;
    const {itemCards} = resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);
    return (
        <div className="res-menu">
           
            <h1>{text}</h1>
            <h3>{resInfo?.cards[2]?.card?.card?.info.areaName}, {resInfo?.cards[2]?.card?.card?.info.city} </h3>
            <h4>{resInfo?.cards[2]?.card?.card?.info.cuisines}</h4>
            <h4>{resInfo?.cards[2]?.card?.card?.info.avgRating}</h4>
            <h4>{resInfo?.cards[2]?.card?.card?.info.costForTwoMessage}</h4>
            
            <ul>
                {itemCards.map( (item) => (<li> key={item.card.info.id} {item.card?.info?.name} </li>))}

            </ul>
        </div>

    )
};

export default RestaurantMenuCard;