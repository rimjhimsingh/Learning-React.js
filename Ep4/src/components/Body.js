import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/constants"
import Shimmer from "./Shimmer.js"


const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  if (listofRestaurants == 0) {
    return (
      <div className="shimmer">
        {<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}{<Shimmer></Shimmer>}
      </div>
    )
  }



  return (
    <div className="body-container">

      <div className="filter" >
        <button className="btn" onClick={() => {
          const filteredList = listofRestaurants.filter(
            (res) =>
              res.info.avgRating > 4);
          setlistofRestaurants(filteredList);
          console.log(filteredList);
        }
        }
        > Top rated restaurants!</button>
      </div>
      <div className="res-container">

        {listofRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.storeUuid} resData={restaurant} /> //storeUid is given in the data
        ))}
      </div>
    </div>
  )
}
export default Body;


