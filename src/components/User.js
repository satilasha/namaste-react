import { useState } from "react"

const User = (props) => {
    const { name, location } = props
    const [ count , setCount] = useState(0)
    return (
        <div className="user-component">
            <h1>Count : {count} </h1>
            <button className="update-count" onClick={
                () => {
                    setCount(count + 1)
                }
            }>CLICK</button>
            
            <h1>{name}</h1>
            <h2>{location}</h2>
        </div>

    )
}


export default User;