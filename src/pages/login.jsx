import React from "react";
import { useNavigate } from "react-router-dom";
import BNI from "../images/logo.png";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen flex items-center justify-center custom-bg">
      {/* <img src={BNI} alt="" className="absolute left-[2%] top-[2%] w-[7rem] h-[3rem]" />
      <div className="text-white font-bold right-[2%] bottom-[2%] absolute text-[1.5rem] text-right">
        <div>INtegrated</div>
        <div>FUnd</div>
        <div>System</div>
        <div>ManagEment</div>
        <div>(INFUSE)</div>
      </div> */}
      <div className="w-[90%] md:w-[50%] lg:w-[35%] bg-white rounded-xl p-10">
        <div className="pb-5 text-center text-3xl font-bold text-blue">Login</div>
        <form className="flex flex-col gap-5">
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Email <span className="text-blue">*</span>
            </label>
            <input className="p-3 border-gray outline-none border-[1px] rounded-md" placeholder="Masukkan Email" />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">
              Password <span className="text-blue">*</span>
            </label>
            <input className="p-3 border-gray outline-none border-[1px] rounded-md" placeholder="Masukkan Password" />
          </div>
          <div className="flex gap-3 items-center">
            <input type="checkbox"></input>
            <h2>Remember Me</h2>
          </div>
          <button onClick={() => navigate("/main")} className="w-full p-3 rounded-md text-white bg-blue font-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
