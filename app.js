import React from "react";
import ReactDOM from "react-dom/client";



let heading = React.createElement("h1", { "id": "heading" }, "Hello World from React");

let Jsxheading = () => (
    <h1 className="heading">
        Nameaste React using JSX
    </h1 >
)

let title = (
    <h1 className="heading">
        Nameaste React using react element
    </h1 >
)

const ReactComponent = () => (
    <div>
        {title}
        < Jsxheading />
        <h1>React Component</h1>
    </div>

)

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ReactComponent />);