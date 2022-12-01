import React from "react";
import Form from "../../component/Navbar/Form";
import {useAuth} from "../../context/auth"
import Logout from "../../component/Navbar/Logout"


function Login() {
    const auth = useAuth();
    console.log()
    return (
      <div className="h-full flex flex-col justify-center items-center bg-white">
        
        {auth.user.length > 0
        ?<Logout/>
        :<Form nameForm="Iniciar Sesion" />
        }
        
      </div>
    );
  }
  
  export default Login;