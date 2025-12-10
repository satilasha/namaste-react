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
            <div className="user-component max-w-xs mx-auto bg-white rounded-xl shadow-md p-6 mt-6 text-center transition hover:shadow-lg">
                <h1 className="text-xl font-bold mb-3 text-gray-800">Name: {name}</h1>

                <img
                    src={avatar_url}
                    alt="User Avatar"
                    className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-sm"
                />

                <h2 className="text-gray-700 text-lg font-medium">User Name: {login}</h2>
            </div>
        )
    }

}

export default UserClass;