import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userInfo : {
                name: "hello dummy",
                location: "dummy location bud",
                id: null,
            },
            
        };
        console.log(this.props.name + "Child Constructor");
    }

    async componentDidMount(){
        //we will make api calls here

        const data = await fetch("https://api.github.com/users/rimjhimsingh");
        const json = await data.json(); //you forgot to do () here
        this.setState({
            userInfo: json,
        })
        console.log(json);
    }

    render() {
        const { name, location, id, avatar_url } = this.state.userInfo;
       
        return (
            <div className="box-about">
                <img src = {avatar_url} />
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>{id}</h4>
                <h4>@rimjhimsingh</h4>

            </div>
        )
    }
}

export default UserClass;
