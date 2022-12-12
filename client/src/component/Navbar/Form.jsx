import React, { useState } from "react";
import { useAuth } from "../../context/auth";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";


import { AiFillFire } from "react-icons/ai";



function Form({ nameForm }) {
  const [viewPassword, setViewPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [name, setNamee] = useState("");
  const [password, setPassword] = useState("");
  const [validacion, setValidation] = useState("")
  const [secondPassword, setSecondPassword] = useState("");
  const auth = useAuth();
  const error = auth.error;
  const handlerAuth = (e) => {
    e.preventDefault();
    if (nameForm === "Iniciar Sesion") {
      try {
        auth.login(email, password);
        
      } catch (error) {
        console.error(error);
      }
    } else if (nameForm === "Registrarse") {
      try {
        if (password === secondPassword) {
          auth.register(name, email, password);
          
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const google = () => {
    try {
      auth.googleAuth();
    } catch (error) {
      console.error(error);
    }
  };

  const validete = (password)=> {
    var ExpRegPassFuerte=/(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/;
    if(password.match(ExpRegPassFuerte)!== null ){
      console.log("Registro existoso")
      setValidation("")
    }else{
     setValidation("La contraseña debe contener un minimo de 8 caracteres entre los cuales uno debe ser una letra Mayuscula otra minuscula y un caracter especial(@!$%&/=)")
    }
  }

  const handlerPass= (e)=> {
    setPassword(e.target.value)
    validete(password)
  }


  return (
    <div
      className="flex  w-4/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{ background: "#292626" }}
    >
      <div className="w-full max-w-md space-y-8">
        {error && (
          <div className="text-sm text-center">
            <div
              className="font-medium  text-red-600 hover:text-indigo-500 "
            >
            
              {error && nameForm === "Registrarse" ? (
                <a>Este email ya esta en uso</a>
              ) : (
                <a>Error de credencial</a>
              )}
            </div>
          </div>
        )}

        <div>
          <AiFillFire className="mx-auto h-12 w-auto animate-pulse text-red-600" />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
            {nameForm}
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={(e) => handlerAuth(e)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            {nameForm === "Registrarse" ? (
              <div>
                <label htmlFor="Nombre" className="sr-only">
                  Nombre
                </label>
                <input
                  onChange={(e) => setNamee(e.target.value)}
                  id="user"
                  name="Nombre"
                  type="text"
                  autoComplete=""
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Nombre"
                />
              </div>
            ) : (
              <></>
            )}

            <div>
              <label htmlFor="email-address" className="sr-only">
                Correo electronico
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Correo electronico"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Contraseña
              </label>
              <input
                onChange={(e) => handlerPass(e)}
                id="password2"
                name="password"
                type={viewPassword}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Contraseña"
              />
            </div>
            {nameForm === "Registrarse" ? (
              <div>
                <label htmlFor="password" className="sr-only">
                  Repita su contraseña
                </label>
                <input
                  onChange={(e) => setSecondPassword(e.target.value)}
                  id="password3"
                  name="password"
                  type={viewPassword}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Repita su contraseña"
                />
              </div>
            ) : (
              <></>
            )}
            <p className="text-red-600">{validacion}</p>
          </div>

          <div className="flex items-center justify-between flex-col">
            <div className="flex items-center">
              <input
                onChange={() =>
                  viewPassword === "password"
                    ? setViewPassword("text")
                    : setViewPassword("password")
                }
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-white"
              >
                Ver contraseña
              </label>
            </div>

            <div className="text-sm">
              <Link
                className="font-medium text-white hover:text-red-600"
                to="/reset"
              >
                Se olvido la contraseña?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group ${
                password !== secondPassword ? "bg-gray-600" : "bg-red-600"
              } mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              {nameForm}
            </button>
            <div
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-grey-400 focus:ring-offset-2 items-center"
              onClick={(e) => google(e)}
            >
              {nameForm === "Registrarse" ? (
                <Link to="/Login">
                  <FcGoogle className="h-5 w-5 animate-bounce" />
                </Link>
              ) : (
                <>
                  <FcGoogle className="h-5 w-5 animate-bounce" />
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
