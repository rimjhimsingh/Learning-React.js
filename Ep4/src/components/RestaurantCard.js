import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);

    return (
        <div className="m-4 p-4 w-[270px] bg-amber-100  rounded-xl hover:bg-amber-200 hover:scale-108 shadow-xl">
            <img className="rounded-lg" src={CDN_URL+ resData?.info?.cloudinaryImageId} />
            <div className="res-text">
                <h3 className="font-bold py-4 text-xl text-yellow-800">{resData?.info?.name}</h3>
                <h5>{resData?.info?.locality + ", " +resData?.info?.areaName}</h5>
                <h5>{resData?.info?.avgRating }</h5>
                <h5>{resData?.info?.costForTwo }</h5>
            </div>
        </div>
    )
}

//writing a higher order component that will add promoted label
//I did not find the promoted object in the data JSON so i used this
export const promotedLabel= (RestaurantCard) =>{
return (props) => {
    return(
        //write code here
        <div>
            <label className="absolute bg-red-900 text-white m-2 px-2">Open Now</label>
            <RestaurantCard {...props}/>

        </div>
    );
};
};
export default RestaurantCard;