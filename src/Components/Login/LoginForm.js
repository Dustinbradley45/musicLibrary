import React from "react";

const LoginForm = () => {
    return (
        <form>
            <label htmlFor="userName">User Name</label>
            <input type="text" id="userName" />
            <label htmlFor="passWord">Password</label>
            <input type="text" id="passWord" />
            <button type="submit">Submit</button>
            
        </form>
    )
}

export default LoginForm;