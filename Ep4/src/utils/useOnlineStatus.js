//contract input = we dont need anythng, output = if online, return true, if offline false

import { useState, useEffect } from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setOnlineStatus(false);
        });

        window.addEventListener("online", () => {
            setOnlineStatus(true);
        })

    }, []);

    return onlineStatus;
};
export default useOnlineStatus;