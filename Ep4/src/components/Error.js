import {useRouteError} from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className ="error-container">
            <h1> OOOPSSS something went wrong</h1>
            <h3>Dont contact me </h3>
            <h4>{error.status} : {error.statusText}</h4>
        </div>
    )
}

export default Error;