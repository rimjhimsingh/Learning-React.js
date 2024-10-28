import React from "react";
import ReactDOM from "react-dom/client";
//default imports for the components
import Header from "./components/Header"; 
import Body from "./components/Body";



// this is the Layout where everything else will go 
// it is a component which is a normal function in js, returns a JSX object
const AppLayout = () => {
    return (
        <div className="app">
            {<Header></Header>}
            {<Body></Body>}


        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);