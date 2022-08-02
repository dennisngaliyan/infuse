import React from "react";
import Images from "../images";
import RenderHome from "./renderHome";
function Home() {
  return (
    <div className="p-5 border border-black rounded-md">
      <div className="text-xl">Posting date : {new Date().toISOString().slice(0, 10)}</div>
      <div className="p-5 flex flex-col md:flex-row gap-12 md:gap-5 justify-around mt-12">
        <RenderHome title="TABUNGAN" value={200} image={Images.up} prop1={94.56} prop2={94.44} color="bg-green-500" />
        <RenderHome title="GIRO" value={215} image={Images.up} prop1={96.5} prop2={94.79} color="bg-green-500" />
        <RenderHome title="DEPOSITO" value={204} image={Images.down} prop1={104.5} prop2={102.39} color="bg-[#FF0063]" />
      </div>
    </div>
  );
}

export default Home;
