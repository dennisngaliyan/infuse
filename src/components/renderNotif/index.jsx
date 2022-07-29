import React from "react";
import Images from "../../images";

function RenderNotif({ title, description }) {
  return (
    <div className="bg-primary w-full rounded-md p-3 text-white">
      <div className="font-bold flex items-center justify-between">
        <div className="flex gap-3">
          <div>{title}</div>
          <img className="w-[1.5rem] h-[1.5rem]" src={Images.notification} alt="" />
        </div>
        <img className="w-[1.5rem] h-[1.5rem] cursor-pointer" src={Images.close} alt="" />
      </div>
      <div className="my-3">{description}</div>
    </div>
  );
}

export default RenderNotif;
