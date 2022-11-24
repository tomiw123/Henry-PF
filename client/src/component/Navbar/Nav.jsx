import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../../contex/auth"

function Nav (){
    const auth = useAuth()
    return (
        <div>
            <h1>
                <Link to="/">Firebase</Link>
            </h1>
            <div>
                {auth.user === ""(
                    <>
                    <div>
                    <Link to="/register">Register</Link>
                    </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Nav;