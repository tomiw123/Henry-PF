import React from "react";
import { useAuth } from "../../context/auth";

function Reset() {
  const auth = useAuth();
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState("");
  const handlerReset = () => {
    try {
      if (email.length > 0) {
        auth.resetPassword(email);
        setError("");
        setSuccess("sent successfully");
      } else {
        setSuccess("");
        setError("type yout email for the reset passowrd");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="h-full flex flex-col justify-between items-center">
      <div className="flex flex-col  bg-slate-400 w-4/6 rounded-xl shadow-2xl items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <a
          className={`${error && "text-red-700 font-semibold "} ${
            success && "text-green-700 font-semibold"
          }`}
        >
          {error || success}
        </a>
        <h1 className="mb-5 text-xl mt-5">Reset Password</h1>
        <div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full appearance-none  rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm mb-3"
            placeholder="Type your email here!"
          />
          <button
            onClick={() => {
              handlerReset();
            }}
            type="submit"
            className="group  mb-3 relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reset;
