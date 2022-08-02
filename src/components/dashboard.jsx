import React, { useState } from "react";
import Cylinder from "./chart/cylinder";
import Stacked from "./chart/stacked";
import Images from "../images";
import Bar from "./chart/bar";
import Line from "./chart/line";
import Pie from "./chart/pie";
import Package from "./package/package";

function Dashboard() {
  const [performance, setPerformance] = useState("overall");
  const [detail, setDetail] = useState({
    cabang: "",
    periode: "",
  });
  const [detail1Active, setDetail1Active] = useState(false);
  const [detail2, setDetail2] = useState({
    kcp: "",
    periode: "",
  });
  const [detail2Active, setDetail2Active] = useState(false);

  const monthList = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  const optionHandler = (e) => {
    setDetail((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  const optionHandler2 = (e) => {
    setDetail2((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <div className="p-5 border border-black rounded-md">
      <div className="text-xl">Posting date : {new Date().toISOString().slice(0, 10)}</div>
      <div className="w-full flex flex-col mt-6 h-full">
        <div className="w-full flex flex-col md:flex-row gap-2">
          <div
            onClick={() => setPerformance("overall")}
            style={{ borderRadius: "0 0 20px 20px" }}
            className={`${performance === "overall" ? "bg-primary text-white" : "bg-blue text-white"} font-semibold p-3   cursor-pointer flex justify-between items-center`}
            id="overall"
          >
            Overall Performance
          </div>
          <div
            onClick={() => setPerformance("cabang")}
            style={{ borderRadius: "0 0 20px 20px" }}
            className={`${performance === "cabang" ? "bg-primary text-white" : "bg-blue text-white"} font-semibold p-3   cursor-pointer flex items-center justify-between`}
            id="cabang"
          >
            Performance Cabang
          </div>
          <div
            onClick={() => setPerformance("kcp")}
            style={{ borderRadius: "0 0 20px 20px" }}
            className={`${performance === "kcp" ? "bg-primary text-white" : "bg-blue text-white"} font-semibold p-3   cursor-pointer flex items-center justify-between`}
            id="cabang"
          >
            Performance KCP/KK
          </div>
        </div>
        <div className="w-full mt-12">
          {performance === "overall" && (
            <div className="flex flex-col lg:grid grid-cols-3 gap-6">
              <div className="col-span-2 w-full">
                <div className="font-semibold">Target vs Realisasi</div>
                <div className="w-full" style={{ overflowX: "auto" }}>
                  <table className="w-full mt-2">
                    <tr className="font-semibold">
                      <td>Item</td>
                      <td>Full Year</td>
                      <td>Proporsional</td>
                      <td>Realisasi</td>
                    </tr>
                    <tr>
                      <td>Tabungan</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                    </tr>
                    <tr>
                      <td>Giro</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                    </tr>
                    <tr>
                      <td>Deposito</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                    </tr>
                    <tr className="font-semibold">
                      <td>Total</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                      <td>212.366.039</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div>
                <div>% Achievement</div>
                <div>Full Year</div>
                <Bar />
              </div>
              {/* Row 2  */}
              <div className="w-full h-[20rem]">
                <div className="font-semibold">Realisasi</div>
                <Line />
              </div>
              <div>
                <Pie />
              </div>
              <div>
                <div>Proporsional</div>
                <Bar />
              </div>
            </div>
          )}
          {performance === "cabang" &&
            (detail.cabang === "" || detail.periode === "" ? (
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="flex items-center gap-2">
                  <div>Cabang :</div>
                  <select onChange={(e) => optionHandler(e)} name="cabang" className="pr-5 border">
                    <option value=""></option>
                    <option value="Overall">Overall</option>
                    <option value="Cabang A">Cabang A</option>
                    <option value="Cabang B">Cabang B</option>
                    <option value="Cabang C">Cabang C</option>
                    <option value="Cabang D">Cabang D</option>
                    <option value="Cabang E">Cabang E</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <div>Periode :</div>
                  <select onChange={(e) => optionHandler(e)} name="periode" className="pr-5 border">
                    <option value=""></option>
                    {monthList.map((x) => {
                      return <option value={x}>{x}</option>;
                    })}
                  </select>
                </div>
              </div>
            ) : !detail1Active ? (
              <div className="">
                <div className="flex items-center gap-12 p-3 w-fit mb-12 bg-primary text-white rounded-md">
                  <div className="font-semibold">Cabang : {detail.cabang} </div>
                  <div className="font-semibold">Periode : {detail.periode} </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="h-full lg:h-[30rem] w-full">
                    <Pie />
                  </div>
                  <div className="w-full">
                    <div className="h-[15rem] w-full">
                      <div>% FY</div>
                      <Stacked colorBar="yellow" setDetailActive={setDetail1Active} />
                    </div>
                    <div className="h-[15rem] w-full">
                      <div>% Prop</div>
                      <Stacked colorBar="blue" setDetailActive={setDetail1Active} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-12 p-3 w-fit mb-12 bg-primary text-white rounded-md">
                  <div className="font-semibold">Cabang : {detail.cabang} </div>
                  <div className="font-semibold">Periode : {detail.periode} </div>
                </div>
                <Package />
              </div>
            ))}
          {performance === "kcp" &&
            (detail2.kcp === "" || detail2.periode === "" ? (
              <div className="flex flex-col md:flex-row items-center gap-5">
                <div className="flex items-center gap-2">
                  <div>KCP :</div>
                  <select onChange={(e) => optionHandler2(e)} name="kcp" className="pr-5 border">
                    <option value=""></option>
                    <option value="Overall">Overall</option>
                    <option value="Cabang A">KCP A</option>
                    <option value="Cabang B">KCP B</option>
                    <option value="Cabang C">KCP C</option>
                    <option value="Cabang D">KCP D</option>
                    <option value="Cabang E">KCP E</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <div>Periode :</div>
                  <select onChange={(e) => optionHandler2(e)} name="periode" className="pr-5 border">
                    <option value=""></option>
                    {monthList.map((x) => {
                      return <option value={x}>{x}</option>;
                    })}
                  </select>
                </div>
              </div>
            ) : !detail2Active ? (
              <div className="">
                <div className="flex items-center gap-12 p-3 w-fit mb-12 bg-primary text-white rounded-md">
                  <div className="font-semibold">KCP : {detail2.kcp} </div>
                  <div className="font-semibold">Periode : {detail2.periode} </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center">
                  <div className="h-full lg:h-[30rem] w-full">
                    <Pie />
                  </div>
                  <div className="w-full">
                    <div className="h-[15rem] w-full">
                      <div>% FY</div>
                      <Stacked colorBar="yellow" setDetailActive={setDetail2Active} />
                    </div>
                    <div className="h-[15rem] w-full">
                      <div>% Prop</div>
                      <Stacked colorBar="blue" setDetailActive={setDetail2Active} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-12 p-3 w-fit mb-12 bg-primary text-white rounded-md">
                  <div className="font-semibold">KCP : {detail2.kcp} </div>
                  <div className="font-semibold">Periode : {detail2.periode} </div>
                </div>
                <Package />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
