import React, { useState } from "react";
import { useAuth } from "../../contex/auth";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { async } from "@firebase/util";

function Form({ nameForm }) {
  const [viewPassword, setViewPassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");
  const auth = useAuth();
  const error = auth.error;
  const handlerAuth = (e) => {
    e.preventDefault();
    if (nameForm === "Login") {
      try {
        auth.register(email, password);
      } catch (error) {
        console.error(error);
      }
    } else if (nameForm === "Register") {
      try {
        if (password === secondPassword) {
          auth.register(email, password);
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

  return (
    <div className="flex bg-slate-400 w-4/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {error && (
          <div className="text-sm text-center">
            <a
              href="#"
              className="font-medium  text-red-600 hover:text-indigo-500 "
            >
              {error && nameForm === "Register" ? (
                <a>Email already in use</a>
              ) : (
                <a>Error credentials</a>
              )}
            </a>
          </div>
        )}

        <div>
          <img
            className="mx-auto h-12 w-auto animate-pulse"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
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
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                id="password"
                name="password"
                type={viewPassword}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {nameForm === "Register" ? (
              <div>
                <label htmlFor="password" className="sr-only">
                  Repeat you password
                </label>
                <input
                  onChange={(e) => setSecondPassword(e.target.value)}
                  id="password"
                  name="password"
                  type={viewPassword}
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Repeat you password"
                />
              </div>
            ) : (
              <></>
            )}
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
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                View my password
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                <Link to="/reset">Forgot your password?</Link>
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`group ${password !== secondPassword ? "bg-gray-600" : "bg-indigo-600"
              } mb-3 relative flex w-full justify-center rounded-md border border-transparent  py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            >
              {nameForm}
            </button>
            <div
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-white py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 items-center"
              onClick={(e) => google(e)}
            >
              {nameForm === "Register" ? (
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