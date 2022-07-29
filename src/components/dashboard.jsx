import React, { useState } from "react";
import Cylinder from "./chart/cylinder";
import Stacked from "./chart/stacked";
import Images from "../images";

function Dashboard() {
  const [chart, setChart] = useState("overall");
  const [title, setTitle] = useState("Full Year");
  const [cabang, setCabang] = useState("");
  const [hide, setHide] = useState({
    overall: false,
    cabang: false,
  });

  const hideHandler = (e) => {
    setHide((prevState) => {
      return {
        ...prevState,
        [e.target.id]: !prevState[e.target.id],
      };
    });
  };

  const dropdownHandler = (e) => {
    setHide((prevState) => {
      return {
        ...prevState,
        [e]: !prevState[e],
      };
    });
  };

  const handleList = (e) => {
    setCabang(e.target.id);
    setChart("cabang");
  };

  const handleOverall = (e) => {
    setTitle(e.target.id);
    setChart("overall");
  };

  return (
    <div className="p-5 border border-gray rounded-md">
      <div className="text-xl">Posting date : dd-mm-yyyy</div>
      <div className="w-full flex flex-col lg:flex-row mt-6 h-full">
        <div className="w-full lg:w-[25%] flex flex-col gap-3">
          <div className="font-semibold p-3 bg-primary text-white cursor-pointer flex justify-between items-center" id="overall" onClick={(e) => hideHandler(e)}>
            Overall Performance
            <img onClick={() => dropdownHandler("overall")} className={`${hide.overall ? "" : "rotate-[180deg]"} transition-all w-[2rem] h-[2rem]`} src={Images.dropdown} alt="" />
          </div>
          <div className={`${!hide.overall ? "show-height" : "hide-height"}`}>
            <ul>
              <li>Target</li>
              <li id="Full Year" onClick={(e) => handleOverall(e)}>
                Full Year
              </li>
              <li id="Proporsional" onClick={(e) => handleOverall(e)}>
                Proporsional
              </li>
            </ul>
            <ul>
              <li>Realisasi</li>
              <li id="Last Month" onClick={(e) => handleOverall(e)}>
                Last Month
              </li>
              <li id="YTD" onClick={(e) => handleOverall(e)}>
                YTD
              </li>
              <li id="YOY" onClick={(e) => handleOverall(e)}>
                YOY
              </li>
            </ul>
          </div>
          <div className="font-semibold p-3 bg-primary text-white cursor-pointer flex items-center justify-between" id="cabang" onClick={(e) => hideHandler(e)}>
            Performance Cabang
            <img onClick={() => dropdownHandler("cabang")} className={`${hide.cabang ? "" : "rotate-[180deg]"} transition-all w-[2rem] h-[2rem]`} src={Images.dropdown} alt="" />
          </div>
          <div className={`${!hide.cabang ? "show-height" : "hide-height"}`}>
            <ul>
              <li id="A" onClick={(e) => handleList(e)} style={{ paddingLeft: "1rem", fontWeight: 600 }}>
                Cabang A
              </li>
              <li id="B" onClick={(e) => handleList(e)} style={{ paddingLeft: "1rem", fontWeight: 600 }}>
                Cabang B
              </li>
              <li id="C" onClick={(e) => handleList(e)} style={{ paddingLeft: "1rem", fontWeight: 600 }}>
                Cabang C
              </li>
              <li id="D" onClick={(e) => handleList(e)} style={{ paddingLeft: "1rem", fontWeight: 600 }}>
                Cabang D
              </li>
              <li id="E" onClick={(e) => handleList(e)} style={{ paddingLeft: "1rem", fontWeight: 600 }}>
                Cabang E
              </li>
            </ul>
          </div>
          {/* <div>Performance Outlet</div>
          <div>Performance per Item</div> */}
        </div>
        <div className="w-full mt-6 md:mt-0">
          {chart === "overall" && <Stacked title={title} />}
          {chart === "cabang" && (
            <div className="w-full flex flex-col gap-5">
              <Cylinder cabang={cabang} />
              <div className="text-2xl font-semibold">Target vs Realisasi</div>
              <Stacked title={title} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
