import Shimmer from "./Shimmer";
import { useParams } from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu";
import {CDN_URL} from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenuCard = () => {

    const {resId} = useParams(); //params is an object which has the resId
    const resId1 = useParams();
    const resInfo = useRestaurantMenu(resId);


    if(resInfo == null)
        return <Shimmer/>
    const resName = resInfo?.cards[0]?.card?.card?.text;
    const area = resInfo?.cards[2]?.card?.card?.info?.areaName;
    const city = resInfo?.cards[2]?.card?.card?.info?.city;
    const rating = resInfo?.cards[2]?.card?.card?.info?.avgRating;
    const cost = resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage;
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;
    

   const categories = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards?.filter( (c) => c?.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);
    return (
        <div className="res-menu text-center">
            <div className ="flex m-4 p-10 items-center justify-center">
            <img className="rounded-lg " src={CDN_URL+ resInfo?.cards[2]?.card?.card?.info?.cloudinaryImageId} />
            </div>
        <h1 className="text-3xl font-bold text-gray-800">{resName}</h1>
        <h2 className="text-2xl font-semibold text-gray-600">{area }, {city}</h2>
        <h3 className ="text-xl font-medium text-gray-600">Average Rating : {rating}</h3>
        <h3 className ="text-lg font-medium text-gray-600">{cost}</h3>
        <h3 className ="text-lg font-medium text-gray-600">{cuisines.join(", ")}</h3>
        {/* Categories accordian add key*/}
        { categories.map((category) => (<RestaurantCategory data={category?.card?.card}/>))}
        
            
            {/*
            
            <ul>
                {itemCards.map( (item) => (<li key={item.card.info.id}>  {item.card?.info?.name} </li>))}

            </ul> */}
        </div>

    )
};

export default RestaurantMenuCard;