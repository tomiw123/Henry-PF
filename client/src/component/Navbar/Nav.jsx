import React from "react";
import { Link } from "react-router-dom"
import { useAuth } from "../../context/auth"
import {RiRadioButtonLine} from "react-icons/ri"
// import img from "../../../public/LOGO.jpeg"
import {AiFillFire} from "react-icons/ai"

function Nav() {
    const auth = useAuth();
    return (
      <div className="flex items-center w-full justify-between pr-3 pl-1 bg-black h-14">
        {/* <div>
            <img className="h-20 w-20" src={img} alt="" />
        </div> */}
        <div className="flex items-center">
            <AiFillFire className="text-red-500 mr-1 h-10 w-10"/>
            <Link to="/">
        <h1 className="text-white font-extralight text-2xl"> 
          Dos Dagas
        </h1>
        </Link>
        </div>
        <div className="flex">
          {auth.user === "" ? (
            <>
              <div className="bg-slate-800 text-white rounded-md w-20 text-center">
                <Link to="/register">Registrarse</Link>
              </div>
              <div className="bg-slate-800 text-white text-center  rounded-md ml-3 w-24">
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
  

