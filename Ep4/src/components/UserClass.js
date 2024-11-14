import React from "react";
class UserClass extends React.Component {
    constructor(props)
    {
        super(props);
        console.log(props);
    }

    render() {
        const {name, location, handle} = this.props;
        
        return (
            <div className="box-about">
                <h2>{this.props. name}</h2>
                <h3>{this.props.location}</h3>
                <h4>{this.props.handle}</h4>

            </div>
        )
    }
}

export default UserClass;
