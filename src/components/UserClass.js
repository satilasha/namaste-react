import React from "react";


class UserClass extends React.Component {
    constructor(props) {
        super(props)

        console.log("UserClass Component Constructor");

        this.state = {
            userInfo: {
                name: "Loading...",
                login: "Loading...",
                avatar_url: "Loading..."
            }
        }


    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/" + this.props.name);
        const json = await data.json()

        this.setState({
            userInfo: json
        })

        this.timer = setInterval(() => {
            console.log("Interval Running");
        }, 10000)

        console.log("UserClass Component Mounted");
    }

    componentDidUpdate() {
        console.log("UserClass Component Updated");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("UserClass Component Unmounted");
    }

    render() {
        const { name, login, avatar_url } = this.state.userInfo;
        return (

            console.log("UserClass Component Rendered"),
            <div className="user-component">
                <h1>Name : {name}</h1>
                <img src={avatar_url} alt="User Avatar" />   
                <h2>User Name : {login}</h2>
            </div>
        )
    }

}

export default UserClass;