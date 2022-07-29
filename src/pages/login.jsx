import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-primary w-full h-screen flex items-center justify-center">
      <div className="w-[90%] md:w-[50%] lg:w-[35%] bg-secondary rounded-xl p-10">
        <div className="pb-5 text-center text-3xl font-bold text-primary">Login</div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Email <span className="text-primary">*</span>
            </label>
            <input className="p-3 border-gray outline-none border-[1px] rounded-md" placeholder="Masukkan Email" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Password <span className="text-primary">*</span>
            </label>
            <input className="p-3 border-gray outline-none border-[1px] rounded-md" placeholder="Masukkan Password" />
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox"></input>
            <h2>Remember Me</h2>
          </div>
          <button onClick={() => navigate("/main")} className="w-full p-3 rounded-md text-secondary bg-primary font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
