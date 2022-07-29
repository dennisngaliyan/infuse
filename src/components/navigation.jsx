import React from "react";

function Navigation({ active, setActive, title, icon }) {
  return (
    <div onClick={() => setActive(title)} className={`${active === title ? "bg-red" : ""} flex items-center hover:bg-red cursor-pointer gap-3 p-3 rounded-md pr-12`}>
      <img className="w-[2rem] h-[2rem]" src={icon} alt="" />
      <div>{title}</div>
    </div>
  );
}

export default Navigation;
