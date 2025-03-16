import RestaurantCard, {promotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/constants"
import Shimmer from "./Shimmer.js"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Body = () => {

  const [listofRestaurants, setlistofRestaurants] = useState([]);

  //make a copy of this list, and we use the copy to diaply on UI and use the original to search and perform functionalities on 

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  
  const [searchText, setsearchText] = useState(""); //we made a state variable which will track the value inside the search box
  const PromotedCard = promotedLabel(RestaurantCard); //for the promoted label
  useEffect(() => {
    fetchData();
  }, []
  );

  const fetchData = async () => {
//    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
   
    const data = await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6460176&lng=77.3695166&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log("i am printing the data that is fetched", json);
    setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //updating both lists

  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false)
    return (
      <h2>Looks like you are offline check your internet status</h2>
    );

  //---------**** Shimmer UI ****------------//
  return listofRestaurants == 0 ? (
    <div className="shimmer">
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}
      {<Shimmer></Shimmer>}


    </div>
  ) : (
    
    //---------**** Search Box ****------------//
    <div className="">
      <div className="flex">
      <div className="search m-4 p-4 ">
        <input type="text" className="border-black border-solid" input={searchText} onChange={(e) => setsearchText(e.target.value)} />
        <button className="px-4 py-2 bg-yellow-100 m-4 rounded-lg hover:bg-amber-200" onClick={() => {
          
          const filteredList = listofRestaurants.filter((res) => {
            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          });
          setFilteredRestaurant(filteredList);
        }

        }> Search </button>

      </div>
      {/* Top Rated Restaurants */}
      
      <div className="top-rated m-4 p-4" >
        <button className="px-4 py-2 bg-yellow-100 m-4 rounded-lg hover:bg-amber-200" onClick={() => {
          const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRating > 4.5);
          setFilteredRestaurant(filteredList);
        }
        }
        > Top rated restaurants!</button>
      </div>

      </div>
      
     
      <div className="flex flex-wrap">
      {filteredRestaurant.map((restaurant) => (
        
     // <Link to={"/restaurants/" + restaurant?.data?.storeUuid}> //old API
        <Link to={"/restaurants/" + restaurant?.info?.id}>
        {
          
          //if the promoted label is true then call the component to render promoted resCard
          restaurant?.info?.isOpen ? <PromotedCard resData={restaurant}/> : <RestaurantCard key={restaurant?.data?.storeUuid} resData={restaurant}/>
        } 
       </Link>  //storeUid is given in the data

      ))}
      </div>
      </div>
      
    
  )
}
export default Body;


