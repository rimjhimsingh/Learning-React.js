import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    
    return (
        <div className="About container">
            <h1> This is my beautiful food application </h1>
            <h3>Welcome!</h3>
            {<User />}
            <p></p>
            {<UserClass name = "Avni Singh" location = "Delhi, India" handle = "@gorlyavni"/>}
        </div>
    )
}

export default About;