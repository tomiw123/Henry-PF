
import React, {useState} from "react";
import {useAuth} from "../../../context/auth"
import {Navigate} from "react-router-dom"
import { Link } from "react-router-dom";

function TotalAdmin() {
  const auth = useAuth();
  const [userId, setUserId] = useState("");
  const [admin, setAdmin] = useState("");

  const controlador = (e) => {
    e.preventDefault;
    auth.setAsing(userId, admin);
    window.location.replace('/HAdmin')
  };
 // console.log(controlador);

  const user = localStorage.getItem("role");
  if (user !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <>
      {" "}
      {auth.user === "admingeneral@gmail.com" ? (
        
        <div className="flex h-screen w-6/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#292626"}}>
          <form className="flex flex-col bg-gray-300 p-5 w-3/5 h-3/5  text-black justify-center   items-center rounded-md shadow hover:shadow-2xl">
            <Link to='/HAdmin'>
          <button className="group bg-green-600
          relative flex-items-center w-18 rounded-md border border-transparent  py-2 px-2 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  mb-4 ">Volver</button></Link>

            <h1 className="text-5xl text-black m-2 justify-center items-center ">Asigna rol</h1>
            <div className="flex flex-col bg-gray-300 p-5 w-4/5 h-4/5  text-black  justify-center   items-center">

              <h3 className="text-lg  font-semibold ">Correo electronico</h3> 
              <input 
  
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                type="text"
                className="rounded-md w-72"
                placeholder="Correo electronico"
                />
            </div>
            <div className="flex flex-col flex-start fond-medium text-sm">
              <label className="text-black text-sm font-semibold" >Admin</label>
              <input
                onChange={(e) => {
                  setAdmin(e.target.value);
                }}
                type="checkbox"
                value="admin"
              ></input>
            </div>
            {/* <Link to='/HAdmin'> */}
            <button
              onClick={(e) => {
                controlador(e);
              }}
              type="button"
              className="group  bg-red-600 mb-3 relative flex w-1/5 justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-black hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 mr- focus:ring-offset-2 m-2" 
            >
              Validar
            </button>
            {/* </Link> */}
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center h-3/5">
          <h1 className="text-3xl font-semibold animate-bounce">
            No posee los permisos necesarios.
          </h1>
        </div>
      )}
    </>
  );
}

export default TotalAdmin;
