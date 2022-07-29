import React from "react";

function RenderNotif({ title, description }) {
  return (
    <div className="bg-primary w-full rounded-md p-3 text-white">
      <div className="font-bold">{title}</div>
      <div>{description}</div>
    </div>
  );
}

export default RenderNotif;
