import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import resList from "../utils/constants"

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resList);
  return (
    <div className="body-container">

      <div className="filter" >
        <button className="btn" onClick={() => {
          const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4);
          setlistofRestaurants(filteredList);
          console.log(filteredList);
        }}> Top rated restaurants!</button>
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