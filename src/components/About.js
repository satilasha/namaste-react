import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("About Component Constructor");
    }
    componentDidMount() {
        console.log("About Component Mounted");
    }
    render() {
        return (
            console.log("About Component Rendered"),
            <div className="about-section max-w-3xl mx-auto bg-white rounded-xl shadow-md p-8 mt-10 text-center transition hover:shadow-lg">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>

                <p className="text-gray-600 mb-2">
                    This is a sample About Us page for our React application.
                </p>

                <p className="text-gray-600 mb-6">
                    We aim to provide the best services to our customers.
                </p>

                <div className="user-component mt-4">
                    <UserClass name={"satilasha"} location={"varanasi"} />
                </div>
            </div>
        )
    }
}


// const About = () => {
//     return (
//         <div className="about-section">
//             <h1>About Us</h1>
//             <p>This is a sample About Us page for our React application.</p>
//             <p>We aim to provide the best services to our customers.</p>

//                 <User name={"swati"} location={"bangalore"}/>
//                 <UserClass name={"elon"} location={"varanasi"}/>

//         </div>
//     )
// }

export default About;