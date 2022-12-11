import React from "react";
import {BiLogOut} from "react-icons/bi"
import {useAuth} from "../../context/auth"



function Logout() {
    const auth = useAuth();
    const username = localStorage.getItem("username")
    const logoutButton = () => {
      try {
        auth.logout();
      } catch (error) {
        console.error(error);
      }
    };
    return (
      <div className="flex w-3/6 rounded-xl shadow-2xl items-center flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 "  style={{background:"#292626"}}>
          <div className="flex i">
        <h1 className="text-xl text-white animate-pulse ml-3">Perfil de usuario.</h1>
        </div>
        <div>
        <h2 className="font-thin text-white">email : {auth.user}</h2>
        <h2 className="font-thin text-white">nombre : {auth.userName ? auth.userName : username}  </h2>
         <h2 className="font-thin text-white">id : {auth.id }  </h2>
         </div>
        <div
        className="group mt-5 items-center selection:last:relative flex w-full justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
          onClick={() => {
            logoutButton();
          }}
        >
          <p className="mr-2 text-base">Cerrar Sesion</p>
          <BiLogOut className="h-5 w-5 animate-bounce"/>
        </div>
      </div>
    );
  }
  
  export default Logout;