import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "h1" },
    "Namaste React using Core React"
)

console.log(heading);

const jsxHeading = <h1 id="h1"> Namaste React using JSX wuhuuuu</h1>;
console.log(jsxHeading);

//React Components 
//functional component
//ALWAYS START component with a capital letter
const HeadingComponent = () => {
    return <h1 className="h1" >Namaste React by Functional Component</h1>
}
const Title = () => {
    return <h1 className="h1" >Hello I am being nested using component composition</h1>
}

//className property used by JSX, instead of class like in HTML
const HeadingComponent2 = () => (
    <div id="container">
        {Title()};
        <Title></Title>
        <Title/>;
        <h1 className="h1" >Namaste React by Functional Component</h1> 
    </div>

)

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxHeading);
root.render(<HeadingComponent2 />);