import { CDN_URL } from "../utils/constants";

const RestaurantListItems = ({items}) => {
    
    console.log("items", items)
    return (
        <div>
            
            {/* {items.items[0]?.card?.info?.name} */}
            {items.map((item) => (
                
                <div className ="text-left border-b-1 m-4 p-4 flex justify-between">
                    
                    <div className = "w-9/12 p-4">
                        <span className="font-medium text-md ">{item?.card?.info?.name}</span>
                        <span> ₹{item?.card?.info?.price /  100} </span>
                        <p className ="font-light text-s pt-1.5"> {item?.card?.info?.description}</p>
                    </div>

                    <div >                
                        <img src= {CDN_URL + item?.card?.info?.imageId} className =" w-40 align-left rounded-sm shadow-lg"></img>
                    </div>
                    
                </div>
            ))}

        </div>
    );
};

export default RestaurantListItems;