import React from "react";
import Form from "../../component/Navbar/Form"
import { useAuth } from "../../contex/auth";
import Nav from "../../component/Navbar/Nav";

function Register(){
    const auth = useAuth();
    console.log(auth.user)
    return(
        <div>  
            <Nav/>
            <Form nameForm="Register" />
        </div>
    )
}

export default Register;