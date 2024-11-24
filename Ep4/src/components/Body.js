import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import resList from "../utils/constants"
import Shimmer from "./Shimmer.js"
import {Link} from "react-router-dom"



const Body = () => {

  const [listofRestaurants, setlistofRestaurants] = useState([]);
  //make a copy of this list, and we use the copy to diaply on UI and use the original to search and perform functionalities on 
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState(""); //we made a state variable which will track the value inside the search box

  useEffect(() => {
    fetchData();
  }, []
  );

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setlistofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //updating both lists

  };
  console.log()

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
    <div className="body-container">
      <div className="search">
        <input type="text" className="search-box" input={searchText} onChange={(e) => setsearchText(e.target.value)} />
        <button className="search-btn" onClick={() => {

          const filteredList = listofRestaurants.filter((res) => {
            return res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
          });
          setFilteredRestaurant(filteredList);
        }

        }> Search </button>

      </div>
      {/* Top Rated Restaurants */}
      <div className="filter" >
        <button className="btn" onClick={() => {
          const filteredList = listofRestaurants.filter(
            (res) => res.info.avgRating > 4.5);
          setFilteredRestaurant(filteredList);
        }
        }
        > Top rated restaurants!</button>
      </div>

      <div className="res-container">

        {filteredRestaurant.map((restaurant) => (
         <Link to = {"/restaurants/" + restaurant?.data?.storeUuid }> <RestaurantCard key={restaurant?.data?.storeUuid} resData={restaurant} /></Link>  //storeUid is given in the data

        ))}
      </div>
    </div>
  )
}
export default Body;


