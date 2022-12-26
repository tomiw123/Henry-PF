import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import { RiRadioButtonLine } from "react-icons/ri";
import { RiAdminFill } from "react-icons/ri";
// import img from "../../../public/LOGO.jpeg"

function Nav() {
  const auth = useAuth();
  const admin = localStorage.getItem("role");
  const localUser = localStorage.getItem("username");
  return (
    <div
      className="flex items-center w-full justify-between pr-3 pl-1 h-10"
      style={{ background: "#292626" }}
    >
      {/* <div>
            <img className="h-20 w-20" src={img} alt="" />
        </div> */}
      <div className="flex items-center">
        <h1 className="text-white font-extralight text-2xl "></h1>
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
              <p>{auth.userName || localUser}</p>
              <RiRadioButtonLine className="ml-2 animate-pulse text-green-500" />
            </Link>
            {admin === "admin" ? (
                <div>
                <Link to="HAdmin"className=" flex items-center" >
                  <p className="ml-7">admin</p>
                  <RiAdminFill className="ml-2 animate-pulse text-red-500" />
                </Link>
                </div>
              ) : (
                <></>
              )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;
