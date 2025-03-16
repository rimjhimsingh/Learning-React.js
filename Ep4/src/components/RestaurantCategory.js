import RestaurantListItems from "./RestaurantListItems";
import {useState} from "react";
const RestaurantCategory = ({data}) => {
console.log(data);

const [showList, setShowList] = useState(false);
const handler = () => {
    console.log("clicked");
    if (showList) {
        setShowList(false);
    } else {
        setShowList(true);
    } 

}
    return (
        <div className = "bg-amber-50 m-4 p-4 shadow-md" >
            <div className = "flex justify-between" onClick = {handler}> 
            {/* header */}
            <span className = "font-bold text-lg">{data.title}</span>
            <span>⬇️</span>
            </div>
            
            {/* collapsable body: Restaurant List Items*/}
            {showList && <RestaurantListItems items = {data.itemCards}/>}
            

        </div>
    )
}

export default RestaurantCategory;