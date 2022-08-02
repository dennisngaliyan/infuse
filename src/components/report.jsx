import React, { useContext, useState } from "react";
import { StateContext } from "../context/context";
import Images from "../images";

function Report() {
  const ctx = useContext(StateContext);
  const tabunganList = ["Tabungan", "211,825,418", "212,366,039", "212,0095,729", "207,099,377", "200,598,828", "11.265.590", "-5,32", "94.56", "94.44"];
  const giroList = ["Giro", "219,401,655", "227,486,016", "224,443,336", "217,729,106", "215,629,716", "3.771.939", "-1,72", "96.50", "94.79"];
  const giroareaList = ["Giro Area", "68,687,572", "71,158,090", "67,568,293", "65,338,687", "62,723,069", "5.964.504", "-8,68", "92.83", "88.15"];
  const depositoList = ["Deposito", "193,682,008", "200,075,139", "196,878,573", "207,801,381", "204,850,656", "11.168.648", "5,77", "104.05", "102.39"];
  const totalList = ["TOTAL DPK", "624,909,081", "639,926,194", "632,417,637", "632,539,824", "621,040,201", "-3,86888", "-0,62", "98.20", "97.05"];

  const [currentTable, setCurrentTable] = useState("jenis");

  return (
    <div className="p-5 border border-black rounded-md">
      <div className="text-xl">Posting date : {new Date().toISOString().slice(0, 10)}</div>
      <div className="flex items-center gap-5 mt-6">
        <div style={{ borderRadius: "0,0,20px,20px" }} onClick={() => setCurrentTable("jenis")} className={`p-3 bg-primary text-black cursor-pointer ${currentTable === "jenis" ? "bg-[#1363DF] text-white" : ""}`}>
          Berdasarkan Jenis
        </div>
        <div style={{ borderRadius: "0,0,20px,20px" }} onClick={() => setCurrentTable("cabang")} className={`p-3 bg-primary text-black cursor-pointer ${currentTable === "cabang" ? "bg-[#1363DF] text-white" : ""}`}>
          Berdasarkan Cabang
        </div>
      </div>
      {currentTable === "jenis" && (
        <div className="max-w-[100%]" style={{ overflowX: "auto" }}>
          <table className="w-full mt-10">
            <tr className="bg-primary text-black">
              <td rowSpan={2}>Kinerja</td>
              <td>Realisasi</td>
              <td colSpan={2}>Target</td>
              <td colSpan={2}>Realisasi</td>
              <td colSpan={2}>Realisasi thd 31 Dec 2021</td>
              <td colSpan={2}>% Achievement vs Target</td>
            </tr>
            <tr className="bg-primary text-black">
              <td>31-Dec-21</td>
              <td>Full Year</td>
              <td>Prop</td>
              <td>31 Juni 2022</td>
              <td>08 Juli 2022</td>
              <td>Nominal</td>
              <td>%</td>
              <td>Prop</td>
              <td>Full Year</td>
            </tr>
            <tr>
              {tabunganList.map((x) => {
                return <td>{x}</td>;
              })}
            </tr>
            <tr>
              {giroList.map((x) => {
                return <td>{x}</td>;
              })}
            </tr>
            <tr>
              {giroareaList.map((x) => {
                return <td>{x}</td>;
              })}
            </tr>
            <tr>
              {depositoList.map((x) => {
                return <td>{x}</td>;
              })}
            </tr>
            <tr className="bg-primary text-black">
              {totalList.map((x) => {
                return <td>{x}</td>;
              })}
            </tr>
          </table>
        </div>
      )}
      {currentTable === "cabang" && (
        <div className="max-w-[100%]" style={{ overflowX: "auto" }}>
          <table className="w-full mt-10">
            <tr className="bg-primary text-black">
              <td rowSpan={2}>Nama Cabang</td>
              <td colSpan={3}>Tabungan</td>
              <td colSpan={3}>Deposito</td>
              <td colSpan={3}>Giro</td>
              <td colSpan={3}>Total DPK</td>
            </tr>
            <tr className="bg-primary text-black">
              <td>Pragnosa</td>
              <td>Realisasi</td>
              <td>%-tase</td>
              <td>Pragnosa</td>
              <td>Realisasi</td>
              <td>%-tase</td>
              <td>Pragnosa</td>
              <td>Realisasi</td>
              <td>%-tase</td>
              <td>Pragnosa</td>
              <td>Realisasi</td>
              <td>%-tase</td>
            </tr>
            {[...Array(12)].map((e, i) => {
              return (
                <tr>
                  <td>Outlet A</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                  <td>10,348</td>
                </tr>
              );
            })}
            <tr className="bg-primary text-black">
              <td>TOTAL</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
              <td>205,226</td>
            </tr>
          </table>
        </div>
      )}
      <div className="w-full flex flex-col gap-5 md:gap-0 md:flex-row justify-between md:items-center mt-12">
        <div className="text-xl">Download as :</div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center gap-1 mt-2">
            <img className="w-[2rem] h-[2rem]" src={Images.pdf} alt="" />
            <div>PDF</div>
          </div>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-[2rem] h-[2rem]" src={Images.xls} alt="" />
            <div>XLS</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
