import Shimmer from "./Shimmer";
import { useParams } from "react-router"
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenuCard = () => {

    const {resId} = useParams(); //params is an object which has the resId
    console.log(resId);
    const resInfo = useRestaurantMenu(resId);

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
                {itemCards.map( (item) => (<li key={item.card.info.id}>  {item.card?.info?.name} </li>))}

            </ul>
        </div>

    )
};

export default RestaurantMenuCard;