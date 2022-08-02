import React, { useContext, useState } from "react";
import { StateContext } from "../context/context";
import Images from "../images";

function Report() {
  const ctx = useContext(StateContext);
  const tabunganList = ["Tabungan", "211,825,418", "212,366,039", "212,095,729", "207,099,377", "200,598,828", "- 11.265.590", "-5,32", "94.56", "94.44"];
  const giroList = ["Giro", "219,401,655", "227,486,016", "224,443,336", "217,729,106", "215,629,716", "- 3.771.939", "-1,72", "96.50", "94.79"];
  const giroareaList = ["Giro Area", "68,687,572", "71,158,090", "67,568,293", "65,338,687", "62,723,069", "- 5.964.504", "-8,68", "92.83", "88.15"];
  const depositoList = ["Deposito", "193,682,008", "200,075,139", "196,878,573", "207,801,381", "204,850,656", "11.168.648", "5,77", "104.05", "102.39"];
  const totalList = ["TOTAL DPK", "624,909,081", "639,926,194", "632,417,637", "632,539,824", "621,040,201", "-3,86888", "-0,62", "98.20", "97.05"];

  const [currentTable, setCurrentTable] = useState("jenis");

  return (
    <div className="p-5 border border-black rounded-md">
      <div className="text-xl">Posting date : {new Date().toISOString().slice(0, 10)}</div>
      <div className="flex items-center gap-5 mt-6">
        <div style={{ borderRadius: "0 0 20px 20px" }} onClick={() => setCurrentTable("jenis")} className={`p-3 text-white cursor-pointer ${currentTable === "jenis" ? "bg-primary" : "bg-blue"}`}>
          Berdasarkan Jenis
        </div>
        <div style={{ borderRadius: "0 0 20px 20px" }} onClick={() => setCurrentTable("cabang")} className={`p-3 text-white cursor-pointer ${currentTable === "cabang" ? "bg-primary" : "bg-blue"}`}>
          Berdasarkan Cabang
        </div>
      </div>
      {currentTable === "jenis" && (
        <div className="max-w-[100%]" style={{ overflowX: "auto" }}>
          <table className="w-full mt-10">
            <tr className="bg-primary text-white">
              <td rowSpan={2}>Kinerja</td>
              <td>Realisasi</td>
              <td colSpan={2}>Target</td>
              <td colSpan={2}>Realisasi</td>
              <td colSpan={2}>Realisasi thd 31 Dec 2021</td>
              <td colSpan={2}>% Achievement vs Target</td>
            </tr>
            <tr className="bg-primary text-white">
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
            <tr className="bg-primary text-white">
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
            <tr className="bg-primary text-white">
              <td rowSpan={2}>Nama Cabang</td>
              <td colSpan={3}>Tabungan</td>
              <td colSpan={3}>Deposito</td>
              <td colSpan={3}>Giro</td>
              <td colSpan={3}>Total DPK</td>
            </tr>
            <tr className="bg-primary text-white">
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
            <tr>
              <td>Outlet A</td>
              <td>10.348</td>
              <td>10.077</td>
              <td>97.38%</td>
              <td>8.21</td>
              <td>8.682</td>
              <td>105.75%</td>
              <td>2.813</td>
              <td>4.181</td>
              <td>148.62%</td>
              <td>21.371</td>
              <td>22.939</td>
              <td>107.34%</td>
            </tr>
            <tr>
              <td>Outlet B</td>
              <td>11.315</td>
              <td>11.272</td>
              <td>99.62%</td>
              <td>5.204</td>
              <td>5.152</td>
              <td>99.01%</td>
              <td>4.067</td>
              <td>3.32</td>
              <td>81.64%</td>
              <td>20.585</td>
              <td>19.744</td>
              <td>95.91%</td>
            </tr>
            <tr>
              <td>Outlet C</td>
              <td>10.948</td>
              <td>10.72</td>
              <td>97.92%</td>
              <td>4.492</td>
              <td>4.307</td>
              <td>95.89%</td>
              <td>3.462</td>
              <td>2.768</td>
              <td>79.96%</td>
              <td>18.901</td>
              <td>17.796</td>
              <td>94.15%</td>
            </tr>
            <tr>
              <td>Outlet D</td>
              <td>13.101</td>
              <td>12.664</td>
              <td>96.66%</td>
              <td>6.341</td>
              <td>6.426</td>
              <td>101.34%</td>
              <td>11.482</td>
              <td>10.881</td>
              <td>94.77%</td>
              <td>30.923</td>
              <td>29.971</td>
              <td>96.92%</td>
            </tr>
            <tr>
              <td>Outlet E</td>
              <td>9.456</td>
              <td>9.203</td>
              <td>97.33%</td>
              <td>4.205</td>
              <td>4.172</td>
              <td>99.22%</td>
              <td>3.109</td>
              <td>3.189</td>
              <td>102.57%</td>
              <td>16.77</td>
              <td>16.564</td>
              <td>98.77%</td>
            </tr>
            <tr>
              <td>Outlet F</td>
              <td>15.476</td>
              <td>14.916</td>
              <td>96.38%</td>
              <td>9.213</td>
              <td>8.588</td>
              <td>93.21%</td>
              <td>9.486</td>
              <td>7.857</td>
              <td>82.82%</td>
              <td>34.175</td>
              <td>31.361</td>
              <td>91.76%</td>
            </tr>
            <tr>
              <td>Outlet G</td>
              <td>10.745</td>
              <td>10.505</td>
              <td>97.76%</td>
              <td>3.11</td>
              <td>3.258</td>
              <td>104.76%</td>
              <td>3.092</td>
              <td>2.451</td>
              <td>79.27%</td>
              <td>16.946</td>
              <td>16.213</td>
              <td>95.67%</td>
            </tr>
            <tr>
              <td>Outlet H</td>
              <td>11.892</td>
              <td>11.541</td>
              <td>97.05%</td>
              <td>6.661</td>
              <td>5.962</td>
              <td>89.51%</td>
              <td>2.508</td>
              <td>2.323</td>
              <td>92.62%</td>
              <td>21.061</td>
              <td>19.826</td>
              <td>94.14%</td>
            </tr>
            <tr>
              <td>Outlet I</td>
              <td>15.599</td>
              <td>15.233</td>
              <td>97.66%</td>
              <td>7.051</td>
              <td>6.832</td>
              <td>96.89%</td>
              <td>5.289</td>
              <td>4.692</td>
              <td>88.70%</td>
              <td>27.939</td>
              <td>26.757</td>
              <td>95.77%</td>
            </tr>
            <tr>
              <td>Outlet J</td>
              <td>20.049</td>
              <td>19.566</td>
              <td>97.59%</td>
              <td>66.559</td>
              <td>55.533</td>
              <td>83.43%</td>
              <td>78.522</td>
              <td>79.751</td>
              <td>101.57%</td>
              <td>165.13</td>
              <td>154.85</td>
              <td>93.77%</td>
            </tr>
            <tr>
              <td>Outlet K</td>
              <td>6.021</td>
              <td>5.668</td>
              <td>94.13%</td>
              <td>2.017</td>
              <td>2.221</td>
              <td>110.1%</td>
              <td>1.755</td>
              <td>1.478</td>
              <td>84.24%</td>
              <td>9.739</td>
              <td>9.366</td>
              <td>95.65%</td>
            </tr>

            <tr>
              <td>Outlet L</td>
              <td>9.533</td>
              <td>9.102</td>
              <td>95.47%</td>
              <td>35.868</td>
              <td>36.08</td>
              <td>100.59%</td>
              <td>27.689</td>
              <td>18.679</td>
              <td>67.46%</td>
              <td>73.09</td>
              <td>63.861</td>
              <td>87.37%</td>
            </tr>
            <tr>
              <td>Outlet M</td>
              <td>15.749</td>
              <td>15.856</td>
              <td>100.68%</td>
              <td>14.288</td>
              <td>13.655</td>
              <td>95.57%</td>
              <td>20.729</td>
              <td>22.738</td>
              <td>109.69%</td>
              <td>50.766</td>
              <td>52.55</td>
              <td>102.92%</td>
            </tr>
            <tr>
              <td>Outlet N</td>
              <td>16.529</td>
              <td>16.262</td>
              <td>98.38%</td>
              <td>26.617</td>
              <td>31.267</td>
              <td>117.47%</td>
              <td>47.533</td>
              <td>43.759</td>
              <td>92.06%</td>
              <td>90.678</td>
              <td>91.287</td>
              <td>100.67%</td>
            </tr>
            <tr>
              <td>Outlet O</td>
              <td>3.969</td>
              <td>3.289</td>
              <td>82.86%</td>
              <td>1.508</td>
              <td>1.588</td>
              <td>105.29%</td>
              <td>1.81</td>
              <td>1.497</td>
              <td>82.68%</td>
              <td>7.287</td>
              <td>6.373</td>
              <td>87.46%</td>
            </tr>
            <tr>
              <td>Outlet P</td>
              <td>13.4</td>
              <td>313.472</td>
              <td>100.54%</td>
              <td>6.4</td>
              <td>6.476</td>
              <td>101.19%</td>
              <td>3.124</td>
              <td>2.62</td>
              <td>83.85%</td>
              <td>22.924</td>
              <td>22.568</td>
              <td>98.45%</td>
            </tr>
            <tr>
              <td>Outlet Q</td>
              <td>11.098</td>
              <td>11.215</td>
              <td>101.6%</td>
              <td>5.121</td>
              <td>4.651</td>
              <td>90.82%</td>
              <td>3.4</td>
              <td>3.447</td>
              <td>101.39%</td>
              <td>19.618</td>
              <td>19.313</td>
              <td>98.44%</td>
            </tr>
            <tr className="bg-primary text-white">
              <td>TOTAL</td>
              <td>205.226</td>
              <td>200.56</td>
              <td>97.73%</td>
              <td>212.864</td>
              <td>204.851</td>
              <td>96.24%</td>
              <td>229.867</td>
              <td>215.63</td>
              <td>93.81%</td>
              <td>647.958</td>
              <td>621.04</td>
              <td>95.85%</td>
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
