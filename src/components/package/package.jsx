import React from "react";
import Bar from "../chart/bar";
import Line from "../chart/line";
import Pie from "../chart/pie";

function Package() {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 w-full">
        <div className="font-semibold">Target vs Realisasi</div>
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
      <div>
        <div>% Achievement</div>
        <div>Full Year</div>
        <Bar />
      </div>
      {/* Row 2  */}
      <div className="w-full h-[20rem]">
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
  );
}

export default Package;
