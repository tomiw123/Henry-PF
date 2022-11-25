import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../../contex/auth"
import img from "../../../public/LOGO.jpeg"

function Nav() {
    const auth = useAuth();
    return (
      <div className="flex items-center w-full justify-between pr-3 pl-1 bg-white h-14">
        <img src={img} alt="" />
        <div className="flex">
          {auth.user === "" ? (
            <>
              <div className="bg-slate-800 text-white rounded-md w-16 text-center">
                <Link to="/register">Registrarse</Link>
              </div>
              <div className="bg-slate-800 text-white text-center  rounded-md ml-3 w-16">
                <Link to="/login">Iniciar Sesion</Link>
              </div>
            </>
          ) : (
              <div className="bg-slate-800 text-white text-center rounded-md ml-3 w-auto pr-2 pl-2 flex items-center">
              <Link to="/login" className="flex items-center">
              <a>{auth.userName}</a>
              <RiRadioButtonLine className="ml-2 animate-pulse text-green-500"/>
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
  
  export default Nav;
  