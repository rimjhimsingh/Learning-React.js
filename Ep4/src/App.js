import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; 
import Body from "./components/Body";
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenuCard from "./components/RestaurantMenuCard"


// this is the Layout where everything else will go 
// it is a component which is a normal function in js, returns a JSX object
const AppLayout = () => {
    return (
        <div className="app">
            {<Header></Header>}
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurants/:resId", //this means that resId is dynamic, will chnage with restaurants
                element: <RestaurantMenuCard/>,
            }
        ],
        errorElement: <Error/>
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);