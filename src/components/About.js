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
            <div className="about-section">
                <h1>About Us</h1>
                <p>This is a sample About Us page for our React application.</p>
                <p>We aim to provide the best services to our customers.</p>

                {/* <User name={"swati"} location={"bangalore"} /> */}
                <UserClass name={"satilasha"} location={"varanasi"} />

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