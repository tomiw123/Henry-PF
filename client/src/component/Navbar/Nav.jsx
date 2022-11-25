import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../../contex/auth"
import img from "../../../public/LOGO.jpeg"

function Nav (){
    const auth = useAuth()
    return (
        <div>
           <img src={img} alt="" />
            <div>          
                <div>
                <Link to="/register">Registrarse</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;