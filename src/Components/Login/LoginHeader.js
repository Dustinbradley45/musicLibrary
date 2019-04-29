import React from "react";

const LoginHeader = ({ isLoggedIn }) => {
    return (
        <header>
            {
                isLoggedIn ? 
                    <button>Logout</button>
                    :
                    <button>Login</button>
            }
        </header>
    )
}

export default LoginHeader;