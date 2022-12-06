import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { Navigate } from "react-router-dom";

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
        <div className="bg-gray-100 my-2 w-1/5 h-3/5 flex  flex-col items-center ml-28 rounded-lg shadow-2xl justify-center">
          <form className="flex flex-col bg-gray-300 p-5 w-4/5 h-4/5  text-blck justify-evenly  ">
            <h1>Asigna rol</h1>
            <div className="flex flex-col">
              <label>userID</label>
              <input
                onChange={(e) => {
                  setUserId(e.target.value);
                }}
                type="text"
                placeholder="userID"
              ></input>
            </div>
            <div className="flex flex-col flex-start">
              <label>Admin</label>
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
              className="bg-white rounded-2xl"
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
