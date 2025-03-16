//This is for single responsibility principle. We have moved the fetch data logic into a seperate custom hook
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => 
{

    const [resInfo, setresInfo] = useState(null);
    useEffect(() => {
        fetchMenu();

    }, [resId]);

    const fetchMenu = async () => 
    {
        //const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId)
       
        const data = await fetch ("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6460176&lng=77.3695166&restaurantId=" + resId)
        const json = await data.json();
        setresInfo(json.data)

    };
    return resInfo;

}
export default useRestaurantMenu;