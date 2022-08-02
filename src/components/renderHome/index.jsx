import React from "react";

function RenderHome({ title, value, image, prop1, prop2, color }) {
  return (
    <div className="flex flex-col gap-3 items-center justify-center">
      <div className="text-3xl font-bold text-primary">{title}</div>
      <div className="font-bold text-2xl">IDR {value}.xxx.xxx.xxx</div>
      <div className={`${color} p-5 w-fit flex items-center justify-center rounded-full`}>
        <img className="w-[3rem] h-[3rem]" src={image} alt="" />
      </div>
      <div className="font-semibold text-lg">
        Prop : {prop1}% - FY : {prop2}%
      </div>
    </div>
  );
}

export default RenderHome;
