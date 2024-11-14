import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.state = {
            count: 0
        }
    }

    render() {
        const { name, location, handle } = this.props;
        const { count } = this.state;

        return (
            <div className="box-about">

                <h2>{this.props.name}</h2>
                <h3>{this.props.location}</h3>
                <h4>{this.props.handle}</h4>
                <h4>Current count is: {count}</h4>
                <button className="smilebtn" onClick={() => {
                    //update the count
                    this.setState({
                        count: this.state.count + 1,
                    });

                }}
                >Smile Counter </button>

            </div>
        )
    }
}

export default UserClass;
