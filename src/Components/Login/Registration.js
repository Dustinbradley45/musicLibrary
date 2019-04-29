import React from "react";

const Registration = () => {
    return (
        <form action="">
            <label htmlFor="userName"> Create a User Name</label>
            <input type="text" id="userName" />
            <label htmlFor="passWord"> Create a Password</label>
            <input type="text" id="passWord" />
            <button type="submit">Submit</button>
        </form>
    )
}

export default Registration;