import {CDN_URL} from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log(resData);

    return (
        <div className="card-container">
            <img className="res-img" src={CDN_URL+ resData?.info?.cloudinaryImageId} />
            <div className="res-text">
                <h3>{resData?.info?.name}</h3>
                <h5>{resData?.info?.locality + ", " +resData?.info?.areaName}</h5>
                <h5>{resData?.info?.avgRating }</h5>
                <h5>{resData?.info?.costForTwo }</h5>
            </div>
        </div>
    )
}
export default RestaurantCard;