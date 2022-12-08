
import React, {useState} from "react";
import {useAuth} from "../../../context/auth"
import {Navigate} from "react-router-dom"

function TotalAdmin() {
  const auth = useAuth();
  const [userId, setUserId] = useState("");
  const [admin, setAdmin] = useState("");

  const controlador = (e) => {
    e.preventDefault;
    auth.setAsing(userId, admin);
  };
  const user = localStorage.getItem("role");
  if (user !== "admin") {
    return <Navigate to="/" />;
  }

  return (
    <>
      {" "}
      {auth.user === "admingeneral@gmail.com" ? (
        <div className="flex h-screen w-6/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8 m-10 " style={{ background: "#292626"}}>
          <form className="flex flex-col bg-gray-300 p-5 w-4/5 h-4/5  text-black justify-center   items-center">
            <h1 className="text-5xl text-black m-2 justify-center items-center ">Asigna rol</h1>
            <div className="flex flex-col bg-gray-300 p-5 w-4/5 h-4/5  text-black justify-center   items-center">
              <label className="text-lg">userID</label>
              <input 
  
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                type="text"
                className="rounded-md"
                placeholder="userID"
                />
            </div>
            <div className="flex flex-col flex-start fond-medium text-sm">
              <label className="text-black text.sm" >Admin</label>
              <input
                onChange={(e) => {
                  setAdmin(e.target.value);
                }}
                type="checkbox"
                value="admin"
              ></input>
            </div>
            <button
              onClick={(e) => {
                controlador(e);
              }}
              type="button"
              className="group bg-red-600mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-black hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 m-2" 
            >
              Validar
            </button>
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
