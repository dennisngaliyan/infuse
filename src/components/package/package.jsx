import React from "react";
import Bar from "../chart/bar";
import Bar2 from "../chart/bar2";
import Line from "../chart/line";
import Pie from "../chart/pie";

function Package() {
  return (
    <div className="flex flex-col lg:grid grid-cols-3 gap-6">
      <div className="col-span-2 w-full">
        <div className="font-semibold">Target vs Realisasi</div>
        <div className="w-full" style={{ overflowX: "auto" }}>
          <table className="w-full mt-2">
            <tr className="font-semibold">
              <td>Cabang</td>
              <td>Full Year</td>
              <td>Proporsional</td>
              <td>Realisasi</td>
              <td>% FY</td>
              <td>% Prop</td>
            </tr>
            <tr>
              <td>KCP A</td>
              <td>212.366.039</td>
              <td>210.322.021</td>
              <td>207.009.337</td>
              <td>97.5%</td>
              <td>98.4%</td>
            </tr>
            <tr>
              <td>KCP B</td>
              <td>219.401.655</td>
              <td>219.501.000</td>
              <td>217.729.106</td>
              <td>99.2%</td>
              <td>99.2%</td>
            </tr>
            <tr>
              <td>KCP C</td>
              <td>198.233.421</td>
              <td>199.234.322</td>
              <td>200.111.021</td>
              <td>100.9%</td>
              <td>100.4%</td>
            </tr>
            <tr>
              <td>KCP D</td>
              <td>210.110.210</td>
              <td>212.432.443</td>
              <td>210.112.012</td>
              <td>100.0%</td>
              <td>98.9%</td>
            </tr>
            <tr>
              <td>KCP E</td>
              <td>199.232.211</td>
              <td>199.434.222</td>
              <td>198.766.667</td>
              <td>99.8%</td>
              <td>99.7%</td>
            </tr>
            <tr>
              <td>KCP F</td>
              <td>191.000.210</td>
              <td>193.000.111</td>
              <td>193.234.433</td>
              <td>101.2%</td>
              <td>100.1%</td>
            </tr>
            <tr>
              <td>KCP G</td>
              <td>193.682.008</td>
              <td>193.322.000</td>
              <td>195.888.777</td>
              <td>101.1%</td>
              <td>101.9%</td>
            </tr>
            <tr className="font-semibold">
              <td>Total</td>
              <td>1.424.025.754</td>
              <td>1.426.246.119</td>
              <td>1.422.851.353</td>
              <td>99.9%</td>
              <td>99.8%</td>
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
        <Line />
      </div>
      <div>
        <Pie />
      </div>
      <div>
        <div>Proporsional</div>
        <Bar2 />
      </div>
    </div>
  );
}

export default Package;
